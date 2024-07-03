import { ResultSet } from "@libsql/client";
import { db, quotes, Quote } from "../../lib/db/schema";


abstract class QuoteService {
    static insertQuote = async (quote: Quote): Promise<ResultSet> => 
        await db.insert(quotes).values(quote);

    static getAllQuotes = async () => 
        await db.select().from(quotes);
}

export default QuoteService;
