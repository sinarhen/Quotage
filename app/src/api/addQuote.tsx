import { t } from "elysia";
import QuoteCard from "../components/quote-card";



const schema = t.Object({
    quote: t.String(),
    name: t.String()
});


type TSchema = typeof schema.static;

const addQuote = async (body: TSchema) => {

    if (!body.name) {
        console.error("Missing name");
        return;
    }
    if (!body.quote) {
        console.error("Missing quote");
        return;
    }
    return <QuoteCard {...body} yearsOfLife="1000-2000"/>
}

export { schema };
export default addQuote;