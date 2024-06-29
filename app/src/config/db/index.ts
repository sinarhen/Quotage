import { Config, createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { quotes } from './quotes';

if (!process.env.DATABASE_URL) {
    throw new Error("No DATABASE_URL variable found in environment");
}
const config: Config = {
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
};
const client = createClient(config);

export const db = drizzle(client);
