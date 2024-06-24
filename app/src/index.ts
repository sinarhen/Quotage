import { Elysia } from "elysia";

// Plugins
import { html } from "@elysiajs/html";

// Controllers
import homeController from "./controllers/homeController";
import staticPlugin from "@elysiajs/static";
// import TODO: Authentication Controller



const app = new Elysia();

app.use(html());
app.use(staticPlugin());

app.use(homeController);
    
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
  

