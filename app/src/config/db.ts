import { Client, createClient } from "@libsql/client";

async function getDbInstance(): Promise<Client> {
    if (!process.env.DATABASE_URL){
        throw new Error("No DATABASE_URL variable found in environment")
    }
    const config = {
        url: process.env.DATABASE_URL,
        encryptionKey: process.env.DATABASE_AUTH_TOKEN,
    };
    const db = createClient(config);
    return db;
}


async function initializeDb(db: Client) {
    await db.batch(
        [
            "CREATE TABLE IF NOT EXISTS quotes (author TEXT, birth_year INTEGER, death_date INTEGER, quote TEXT)",
        ],
        "write",
    );


}


export {initializeDb, getDbInstance}