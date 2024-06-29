import { t } from "elysia";
import QuoteCard from "../../components/quote-card";
import {v4 as uuidv4} from 'uuid';
import { insertQuote } from '../../config/db/quotes';



const schema = t.Object({
    quote: t.String(),
    author: t.String(),
    birthYear: t.Integer(),
    deathYear: t.Integer(),
});


type TSchema = typeof schema.static;

const addQuote = async (body: TSchema) => {

    if (!body.author) {
        // Handle errors
        console.error("Missing name");
        return;
    }
    if (!body.quote) {
        console.error("Missing quote");
        return;
    }
    const newQuote = {
        id: uuidv4() as string, 
        ...body
    }

    insertQuote(newQuote)

    return <QuoteCard {...newQuote}/>
}

export { schema };
export default addQuote;