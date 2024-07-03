import {Elysia, t} from "elysia";
import Render from "../services/renderService";
import addQuote, { schema } from "../routes/addQuote";
import AuthService from "../services/authService";


const homeController = new Elysia({prefix: '/', name: "Controller.Home"})
    .use(AuthService)
    .guard({
        loginRequired: false
    })
    .get("/", async ({Auth}) => {
        return Render.root(Auth.user ?? null)
    })
    .post("/add-quote", async ({body}) => await addQuote(body), {
        body: schema
    }).onError(({code, error}) => {
        console.log(error)
    })
    
export default homeController