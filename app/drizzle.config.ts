import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './db/quotes.ts',
  out: './db/migrations',
  driver: "turso",
  dialect: 'sqlite', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
});
