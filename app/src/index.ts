import { Elysia } from "elysia";

// Plugins
import { html } from "@elysiajs/html";
// Controllers
import HomeController from "./controllers/HomeController";
import staticPlugin from "@elysiajs/static";
import { AuthController } from "./controllers/auth/AuthController";

const app = new Elysia();

app.use(html());
app.use(staticPlugin({
  noCache: true
}));
app.use(HomeController);
app.use(AuthController)

app.listen(3000);


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
  

