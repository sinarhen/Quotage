import Button from "./button";

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
        <div class="relative h-[200px] w-full">
            <div tabindex="0" class="relative z-10 h-full focus:-translate-y-14 bg-white transition-transform shadow-lg rounded-lg border border-orange-950">
                <div class="p-6 h-full block w-full overflow-hidden">
                    <h1 class="lg:text-3xl md:text-2xl sm:text-xl text-lg text-zinc-900">
                        {quote.split(' ').slice(0, 3).join(" ") + "..."}
                    </h1>
                    <p class='text-sm text-gray-400'>by {name}({yearsOfLife})</p>
                    <hr class='h-px text-gray-400 my-2' />
                    <p class="text-gray-300 italic">{quote}</p>
                </div>
            </div>
            <div class="flex absolute gap-x-2 bottom-2 z-0 ">
                <button 
                class="
                    cursor-pointer
                    bg-orange-950
                    border 
                    text-white
                    hover:bg-orange-900 
                    transition-colors 
                    focus:outline-none 
                    focus:ring-orange-900 
                    font-medium rounded-lg 
                    text-sm w-full 
                    flex gap-x-1.5 items-center
                    sm:w-auto px-5 py-2.5  ">
                    <img src="/public/icons/heart.svg" width="15" height="15"></img>
                    Like
                </button>
                <button 
                class="
                    bg-white
                    cursor-pointer
                    border 
                    bg-orange-950 
                    hover:bg-gray-100 
                    transition-colors 
                    focus:outline-none 
                    focus:ring-amber-300 
                    font-medium rounded-lg 
                    text-sm w-full 
                    flex gap-x-1.5 items-center
                    sm:w-auto px-5 py-2.5  ">
                    Details
                </button>
            </div>
        </div>
    );
}
