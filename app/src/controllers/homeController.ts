import {Elysia, t} from "elysia";
import HomePage from "../pages/home";
import addQuote, { schema } from "../pages/api/addQuote";
import { TQuote } from "../config/types";
import { getAllQuotes } from "../config/db/quotes";

const homeController = async (app: Elysia) => {
    const quotes = await getAllQuotes();

    return app
        .get("/", async () => await HomePage(quotes))
        .post("/add-quote", async ({body}) => await addQuote(body), {
            body: schema
        })
    
}

export default homeController