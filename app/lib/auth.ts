import {Lucia}  from "lucia";
import { adapter, db, userTable } from "./db/schema";
import { hash } from "bun";
import { generateIdFromEntropySize } from "lucia";

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
		return new Response("Invalid password", {
			status: 400
		});
	}

    
	const passwordHash = (await Bun.password.hash(password)).toString();
	const userId = generateIdFromEntropySize(10); // 16 characters long

    try {
        await db.insert(userTable).values({
            id: userId,
            email: email,
            passwordHash: passwordHash
        })
        // TODO COMPLETE
    }
    catch (err){
        console.log(err)
    }
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