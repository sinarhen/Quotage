export default function QuoteCard({
    quote,
    name,
    yearsOfLife,
}: {
    quote: string;
    name: string;
    yearsOfLife: string;
}){
    return (
        <div class="h-[200px] shadow-sm rounded-lg border border-amber-200">
            <div class="p-6 h-full block w-full overflow-hidden">
                <h1 class="text-3xl text-zinc-900">
                    {quote.split(' ').slice(0, 3).join(" ") + "..."}
                </h1>
                <p class='text-sm text-gray-400'>by {name}({yearsOfLife})</p>
                <hr class='h-px text-gray-400 my-2' />
                <p class="text-gray-300 italic">{quote}</p>
            </div>
        </div>
    )
}