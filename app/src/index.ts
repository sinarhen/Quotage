import { Elysia } from "elysia";

// Plugins
import { html } from "@elysiajs/html";

// Controllers
import homeController from "./controllers/homeController";
import staticPlugin from "@elysiajs/static";
import { initializeDb, insertQuote } from "./config/db";
import { TQuote } from "./config/types";

const app = new Elysia();

app.use(html());
app.use(staticPlugin());
app.use(homeController);


const res = await initializeDb();
console.log(res);

const testQuote: Omit<TQuote, "id"> = {
  quote: "Bla bla bla",
  author: "Marcus Avrelius",
  birthYear: 2006,
  deathYear: 2086
}
insertQuote(testQuote)

app.listen(3000);



console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
  

