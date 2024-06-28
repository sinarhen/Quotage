import { Client, Config, createClient, ResultSet } from '@libsql/client';
import { Quote, TQuote } from './types';

if (!process.env.DATABASE_URL) {
    throw new Error("No DATABASE_URL variable found in environment");
}
const config: Config = {
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
};

export const client = createClient(config);

export const initializeDb = async (): Promise<ResultSet> => {
    return await client.execute("CREATE TABLE IF NOT EXISTS quotes(id TEXT primary key, quote TEXT NOT NULL, birth_year INTEGER, death_year INTEGER, author TEXT)")
}

export const getAllQuotes = async (): Promise<ResultSet> => {
    return await client.execute("SELECT * from quotes");
}

export const insertQuote = async (quote: Quote): Promise<ResultSet> => {
    const { quote: quoteText, author, birthYear, deathYear } = quote;
    const id = 3;
    const res = await client.execute(
        `INSERT INTO quotes (id, quote, birth_year, death_year, author) VALUES ('${quoteText}', ${birthYear}, ${deathYear}, '${author}')`,
    );
    return res
}