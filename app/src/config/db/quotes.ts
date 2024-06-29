import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { Quote, TQuote } from "../types";
import { sql } from "drizzle-orm";
import { db } from ".";

export const quotes = sqliteTable("quotes", {
    id: text("id"),
    quote: text('quote').notNull(),
    deathYear: integer("death_year"),
    birthYear: integer("birthYear"),
    author: text('author'),
    addedAt: text("addedAt").default(sql`CURRENT_TIMESTAMP`)
}, (table) => {
    return {
        id: index("IX_quotes_id").on(table.id)
    }
});


export const getAllQuotes = async () => await db.select().from(quotes)
export const insertQuote = async (quote: TQuote) => await db.insert(quotes).values(quote)
