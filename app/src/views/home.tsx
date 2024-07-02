import AddQuoteForm from "../components/add-quote-form";
import Layout from "../components/layout";
import QuoteCard from "../components/quote-card";
// import { quotesExamples } from "../config/test";
import { Quote } from '../../db/quotes';

const HomePage = async (quotes: Quote[]) => (
      <Layout title="Quotage | Home Page">
        <>
        {/* <div class="fixed z-[100] flex md:px-12 md:py-8 px-2 py-3 items-center justify-center w-full h-full bg-black/30 backdrop-blur-sm " id="favourites-modal-wrapper">
          <div class="flex relative bg-white p-8 rounded-lg max-w-6xl border w-full h-full">
            <div id="favourite-cards-preview" class="w-1/2 h-full flex flex-col gap-y-2 overflow-y-scroll">
              {quotes.map(quoteExample => <QuoteCard {...quoteExample} />)}
              {quotes.map(quoteExample => <QuoteCard {...quoteExample} />)}
              {quotes.map(quoteExample => <QuoteCard {...quoteExample} />)}
            </div>
            <hr class="w-px h-full bg-gray-300/30 mr-12 " />
            <div class="w-1/2 flex-1 h-full flex justify-center items-center">
              <div class="w-full h-full">

              </div>
            </div>
          </div>

        </div> */}
        <div class="w-full h-full flex md:flex-row flex-col">
          <aside class="h-full md:w-[30%] w-full relative">
                <div class="h-full w-full bg-cover bg-[url('https://images.wallpaperscraft.com/image/single/notebook_emptiness_old_80056_3840x2400.jpg')]">
                  <div class="h-full px-8 py-12 flex-col flex justify-between w-full bg-black/70">
                    <div>
                      <h1 class="italic lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-gray-300 text-opacity-50">Quote of the day...</h1>
                      <hr class="h-px bg-gray-400  mt-6 mb-4"/>
                      <AddQuoteForm 
                          hxPost="/add-quote" 
                          hxTarget="#quotes" 
                          hxSwap="afterbegin" 
                      />
                      
                    </div>
                    
                    <div class="
                      bg-black/40 
                      mt-12  
                      flex items-center justify-center
                      py-2 px-4
                      hover:bg-black
                      transition-colors
                      text-white
                      hover:text-gray-200  
                    "
                    >
                      My favourites({quotes.length})
                    </div>
                  </div>
         
                </div>
            </aside>
            
            <section class="md:w-[70%] md:overflow-y-scroll h-full lg:px-14 px-8 py-12">
              <h1 class="md:text-right text-center mb-6  lg:text-5xl md:text-4xl sm:text-3xl text-2xl italic">Here are your daily quotes</h1>
              <div id="quotes" class="grid gap-x-3 gap-y-4  lg:grid-cols-2">
                {quotes.map(quoteExample => <QuoteCard {...quoteExample} />)}
                {quotes.map(quoteExample => <QuoteCard {...quoteExample} quote={"Cras ipsum nunc, suscipit non libero quis, gravida venenatis neque. Sed sed dui leo. Sed venenatis scelerisque consectetur. Etiam fringilla varius tristique. Nunc tincidunt mi felis, vitae rutrum erat commodo in. Vivamus nec arcu et urna molestie condimentum vel eget massa. Ut non sollicitudin Etiam ut auctor tellus. Suspendisse blandit diam at erat hendrerit ultricies. Cras sed rutrum dolor, aliquam tincidunt dolor. Proin fermentum arcu nec nisl malesuada bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus a ex ac justo porttitor pharetra sit amet non dui. Sed vehicula at metus at porttitor."} />)}
                {quotes.map(quoteExample => <QuoteCard {...quoteExample} />)}
                {quotes.map(quoteExample => <QuoteCard {...quoteExample} />)}
              </div>
            </section>
          </div>
          
        </>
      </Layout> 
    )
export default HomePage;