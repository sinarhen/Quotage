export type HTMXSwapAttribute = "innerHTML" | "outerHTML" | "textContent" | "beforebegin" | "afterbegin" | "beforeend" | "afterend" | "delete" | "none";
// Define the TQuote type

export type TQuote = {
    id: string| null;
    quote: string;
    author: string | null;
    birthYear: number | null;
    deathYear: number | null;
}

export type Quote = Omit<TQuote, 'id'>

