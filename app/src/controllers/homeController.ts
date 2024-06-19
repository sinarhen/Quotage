import {Elysia, t} from "elysia";
import HomePage from "../pages/home";
import addQuote, { schema } from "../api/addQuote";

const homeController = (app: Elysia) => {
    return app
        .get("/", async () => await HomePage())
        .post("/add-quote", async ({body}) => await addQuote(body), {
            body: schema
        })
    
}

export default homeController