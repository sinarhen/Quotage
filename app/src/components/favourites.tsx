import { Quote } from "../../lib/db/schema"
import QuoteCard from "./quote-card"

export default function FavoritesModal({quotes, id, hidden}: {
    quotes?: Quote[]
    id: string;
    hidden?: boolean
}): JSX.Element{
    return (
    <div id={id} hidden={hidden} class="flex relative bg-white p-8 rounded-lg max-w-6xl border w-full h-full">
            <div id="favourite-cards-preview" class="w-1/2 h-full flex flex-col gap-y-2 overflow-y-scroll">
              {quotes?.map(quoteExample => <QuoteCard {...quoteExample} />)}
            </div>
            <hr class="w-px h-full bg-gray-300/30 mr-12 " />
            <div class="w-1/2 flex-1 h-full flex justify-center items-center">
              <div class="w-full h-full overflow-y-auto">
                  <p class="text-right text-gray-600 text-xs pr-2">User_Name | 24 May 2024 </p>

                  <h1 class="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-gray-600 ">Quote header</h1>
                  <div class="flex justify-between">
                    <p class="text-sm text-gray-500">Quote Author</p>

                  </div>
                  <hr class='h-px text-gray-400 my-2' />
                  <p class="">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ut maiores nostrum autem nam eveniet vel a eligendi consectetur perferendis quia architecto fuga, ratione illum tenetur corporis, dolor fugiat voluptatem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum blanditiis accusantium natus. Sed sapiente ipsam fugit quidem, distinctio illo quos, aspernatur eligendi asperiores doloribus nesciunt. Harum non dignissimos nesciunt optio? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo veniam deserunt voluptatum quo ullam hic non magni ut ex eaque dolorum, dolore officiis autem vel enim veritatis impedit perferendis vero? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem non veniam delectus explicabo soluta suscipit libero totam fugit obcaecati deserunt atque tempore, quam eos error, eum vitae iusto esse dolorum?
                  </p>
                  <button 
                    class="
                        bg-white
                        cursor-pointer
                        border 
                        mt-4
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
          </div>)

}