import { ResultSet } from "@libsql/client";
import { db } from "../../lib/db/schema";
import quotes from "../../lib/db/quotes";
import { TQuote } from "../../lib/config/types";

abstract class QuoteService {
    static insertQuote = async (quote: TQuote): Promise<ResultSet> => 
        await db.insert(quotes).values(quote);

    static getAllQuotes = async () => 
        await db.select().from(quotes);
}

export default QuoteService;
