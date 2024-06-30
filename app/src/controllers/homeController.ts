import {Elysia, t} from "elysia";
import QuoteService from "../services/quoteService";
import Render from "../services/renderService";
import addQuote, { schema } from "../routes/addQuote";


const homeController = async (app: Elysia) => {
    return app
        .get("/", Render.root) // Probably this is some really stupid shit but just for testing purposes and my laziness purposes i will leave it here for now
        .post("/add-quote", async ({body}) => await addQuote(body), {
            body: schema
        }).onError(({code, error}) => {
            console.log(error)
        })
    
}

export default homeController