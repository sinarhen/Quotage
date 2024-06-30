import { t } from "elysia";
import {v4 as uuidv4} from 'uuid';
import QuoteService from "../services/quoteService";
import QuoteCard from "../components/quote-card";



const schema = t.Object({
    quote: t.String(),
    author: t.String(),
    birthYear: t.Numeric(),
    deathYear: t.Numeric(),
});


type TSchema = typeof schema.static;

const addQuote = async (body: TSchema) => {

    if (!body.author) {
        // Handle errors
        console.error("Missing name");
    }
    if (!body.quote) {
        console.error("Missing quote");
    }
    const newQuote = {
        id: uuidv4() as string, 
        ...body
    }

    var res = await QuoteService.insertQuote(newQuote)
    if (!res.rowsAffected){
        return
    }
    return <QuoteCard {...newQuote}/>
}

export { schema };
export default addQuote;