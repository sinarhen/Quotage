import {Elysia, t} from "elysia";
import addQuote, { schema } from "../routes/addQuote";
import AuthService from "../services/authService";
import QuoteService from "../services/quoteService";
import HomePage from "../views/home";


const HomeController = new Elysia({prefix: '/', name: "Controller.Home"})
    .use(AuthService)
    .guard({
        loginRequired: false
    })
    .get("/", async ({Auth, error}) => {
        const quotes = await QuoteService.getAllQuotes();
        return HomePage(quotes, Auth.user ?? null)
    })
    .guard({
        loginRequired: true
    })
    .post("/add-quote", async ({body}) => await addQuote(body), {
        body: schema
    }).onError(({code, error}) => {
        console.log(error)
    })
    
export default HomeController