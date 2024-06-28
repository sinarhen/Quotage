export type HTMXSwapAttribute = "innerHTML" | "outerHTML" | "textContent" | "beforebegin" | "afterbegin" | "beforeend" | "afterend" | "delete" | "none";
// Define the TQuote type
export type TQuote = {
    id: string;
    quote: string;
    author: string;
    birthYear: number;
    deathYear: number;
}

export type Quote = Omit<TQuote, 'id'>

