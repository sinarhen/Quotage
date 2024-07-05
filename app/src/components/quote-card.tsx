import { Quote } from "../../lib/db/schema";

export default function QuoteCard({
    quote,
    id,
    author,
    birthYear,
    deathYear,
}: Quote ){
    return (
        <div id={id ?? undefined} class="relative h-full w-full">
            <div tabindex="0" class="relative cursor-pointer z-10 h-full bg-transparent transition-transform  rounded-lg  ">
                <div class="p-6 h-full block w-full">
                    <h1 class="lg:text-3xl md:text-2xl sm:text-xl text-lg text-gray-900">
                        {quote?.split(' ').slice(0, 3).join(" ") + "..."}
                    </h1>
                    <p class='text-sm text-gray-400'>by {author}({birthYear} - {deathYear})</p>
                    <hr class='h-px text-gray-400 my-2' />
                    <p class="text-gray-300 italic min-h-[4.5em] line-clamp-3">{quote}</p>
                    <div class="flex space-x-2 mt-2">
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
            </div>
                        
        </div>
    );
}
