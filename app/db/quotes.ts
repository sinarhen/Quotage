import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";


const quotes = sqliteTable("quotes", {
    id: text("id"),
    quote: text('quote').notNull(),
    deathYear: integer("death_year"),
    birthYear: integer("birth_year"),
    author: text('author'),
    addedAt: text("added_at").default(sql`CURRENT_TIMESTAMP`)
}, (table) => {
    return {
        id: index("IX_quotes_id").on(table.id)
    }
});

export type Quote = typeof quotes.$inferSelect;
export type InsertQuote = typeof quotes.$inferInsert;
export default quotes;
