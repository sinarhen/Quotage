import { Client, createClient } from '@libsql/client';

if (!process.env.DATABASE_URL) {
    throw new Error("No DATABASE_URL variable found in environment");
}
const config = {
    url: process.env.DATABASE_URL,
    encryptionKey: process.env.DATABASE_AUTH_TOKEN,
};

export const client = createClient(config);

export const initializeDb = async () => {
    client.execute("CREATE TABLE IF NOT EXISTS quotes(id TEXT primary key, quote TEXT NOT NULL, birth_year INTEGER, death_year INTEGER, author TEXT)")
}