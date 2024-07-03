import { User } from "lucia";
import HomePage from "../views/home";
import QuoteService from "./quoteService";

abstract class Render{
    static async root(user: User | null){
        return HomePage(await QuoteService.getAllQuotes(), user)
    }
}

export default Render;