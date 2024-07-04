import {Lucia}  from "lucia";
import { adapter, db, userTable } from "../db/schema";
import { generateIdFromEntropySize } from "lucia";
import { Cookie } from "elysia";

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