import AddQuoteForm from "../components/add-quote-form";
import Layout from "../components/layout";
import QuoteCard from "../components/quote-card";
import { quotesExamples } from "../config/test";

const HomePage = async () => (
      <Layout title="Quotage | Home Page">
        <>
          <div class="min-h-full w-[30%] relative">
            <div class="fixed w-[30%]  h-full text-white z-50 "> 
              <div class="h-full w-full bg-cover absolute bg-[url('https://images.wallpaperscraft.com/image/single/notebook_emptiness_old_80056_3840x2400.jpg')]">
                
                <div class="h-full px-8 py-12 w-full bg-black/70">
                  <h1 class="italic text-6xl text-gray-300 text-opacity-50">Quote of the day...</h1>
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
          
          <div class="w-[70%] h-full lg:px-12 py-12">
            <h1 class="text-right mb-6 text-6xl italic">Here are your daily quotes</h1>
            <div id="quotes" class="grid gap-x-1 gap-y-1  lg:grid-cols-2">
              {quotesExamples.map(quoteExample => <QuoteCard {...quoteExample} />)}
            </div>
          </div>
        </>
      </Layout> 
    )
export default HomePage;