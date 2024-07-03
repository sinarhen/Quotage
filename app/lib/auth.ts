import {Lucia}  from "lucia";
import { adapter } from "./db/schema";

export const auth = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: process.env.NODE_ENV === 'production'
        }
    }
});

export type Auth = typeof auth;