import { Config, createClient } from '@libsql/client';
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import { drizzle } from 'drizzle-orm/libsql';
import { sql } from 'drizzle-orm/sql/sql';
import { index, integer, primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core';


if (!process.env.DATABASE_URL) {
    throw new Error("No DATABASE_URL variable found in environment");
}
const config: Config = {
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
};
const client = createClient(config);



export const quotes = sqliteTable("quotes", {
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


export const userTable = sqliteTable("user", {
	id: text("id").notNull().primaryKey(),
    email: text("email").unique(),
    passwordHash: text("password_hash")
});

export const sessionTable = sqliteTable("session", {
	id: text("id").notNull().primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: integer("expires_at").notNull()
});
export const db = drizzle(client, {
    schema: {
        quotes,
        userTable,
        sessionTable,
    }
});
export const adapter = new DrizzleSQLiteAdapter(db, sessionTable, userTable);