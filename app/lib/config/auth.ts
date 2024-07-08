import {Lucia}  from "lucia";
import { adapter, db, userTable } from '../db/schema';
import { generateIdFromEntropySize } from "lucia";
import { Cookie } from "elysia";
import { eq } from "drizzle-orm";

export const auth = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: process.env.NODE_ENV === 'production'
        }
    },
    getUserAttributes: (attributes) => {
		return {
			email: attributes.email
		};
	}
});

export async function register(email: string, password: string){
    if (!password || typeof password !== "string" || password.length < 6) {
		return null;
	}

    
	const passwordHash = (await Bun.password.hash(password)).toString();
	const userId = generateIdFromEntropySize(10); // 16 characters long

    await db.insert(userTable).values({
        id: userId,
        email: email,
        passwordHash: passwordHash
    })
    
    const session = await auth.createSession(userId, {})
    return auth.createSessionCookie(session.id)

}

export async function login(email: string, password: string){
	
	const user = await db.query.userTable.findFirst({
		where: eq(userTable.email, email, )
	});

	if (!user) {
		// NOTE:
		// Returning immediately allows malicious actors to figure out valid emails from response times,
		// allowing them to only focus on guessing passwords in brute-force attacks.
		// As a preventive measure, you may want to hash passwords even for invalid emails.
		// However, valid emails can be already be revealed with the signup page
		// and a similar timing issue can likely be found in password reset implementation.
		// It will also be much more resource intensive.
		// Since protecting against this is non-trivial,
		// it is crucial your implementation is protected against brute-force attacks with login throttling etc.
		// If emails/usernames are public, you may outright tell the user that the username is invalid.
		return null;
	}

	const validPassword = await Bun.password.verify(password, user.passwordHash!)
	if (!validPassword) {
		return null
	}

	const session = await auth.createSession(user.id, {});
	const sessionCookie = auth.createSessionCookie(session.id);
	return sessionCookie;
}

// TODO extract 
export function isValidEmail(email: string): boolean {
	return /.+@.+/.test(email);
}


declare module "lucia" {
	interface Register {
		Lucia: typeof auth;
		DatabaseUserAttributes: {
			email: string;
		};
	}
}