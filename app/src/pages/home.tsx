import AddQuoteForm from "../components/add-quote-form";
import Layout from "../components/layout";
import QuoteCard from "../components/quote-card";
import { quotesExamples } from "../config/test";

const HomePage = async () => (
      <Layout title="Quotage | Home Page">
        <div class="w-full h-full md:flex flex-col">
          <div class="md:min-h-full md:w-[30%]full w-full">
            <div class="md:fixed md:z-50 md:w-[30%]   h-full text-white  "> 
              <div class="h-full w-full bg-cover md:absolute bg-[url('https://images.wallpaperscraft.com/image/single/notebook_emptiness_old_80056_3840x2400.jpg')]">
                
                <div class="h-full px-8 py-12 w-full bg-black/70">
                  <h1 class="italic xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-gray-300 text-opacity-50">Quote of the day...</h1>
                  <hr class="h-px bg-gray-400  mt-6 mb-4"/>
                  <AddQuoteForm 
                      hxPost="/add-quote" 
                      hxTarget="#quotes" 
                      hxSwap="afterbegin" 
                  />
                  </div>  
                </div>             
              
              </div>
          </div>
          
          <div class="md:w-[70%] w-full h-full lg:px-12 py-12">
            <h1 class="text-right mb-6 xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl italic">Here are your daily quotes</h1>
            <div id="quotes" class="grid gap-x-1 gap-y-1  lg:grid-cols-2">
              {quotesExamples.map(quoteExample => <QuoteCard {...quoteExample} />)}
            </div>
          </div>
        </div>
      </Layout> 
    )
export default HomePage;