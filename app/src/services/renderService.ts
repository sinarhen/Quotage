import { TQuote } from "../config/types";
import HomePage from "../views/home";
import QuoteService from "./quoteService";

abstract class Render{
    static async root(){
        return HomePage(await QuoteService.getAllQuotes())
    }
}

export default Render;