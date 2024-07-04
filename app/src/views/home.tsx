import { Quote } from "../../lib/db/schema";
import AddQuoteForm from "../components/add-quote-form";
import Button from "../components/button";
import Favourites from "../components/favourites";
import { Input, Label } from '../components/form-input';
import Layout from "../components/layout";
import ModalWrapper from "../components/modal-wrapper";
import QuoteCard from "../components/quote-card";
// import { quotesExamples } from "../config/test";
import { User } from 'lucia';

const HomePage = async (quotes: Quote[],user: User | null) => {
  console.log("User is ", user)
  
  return (
      <Layout title="Quotage | Home Page">
        <>
        <div id="modal">
          <ModalWrapper>
            <div class="max-w-lg py-6 px-4 rounded-lg w-full bg-white h-full">
              <h1 class="italic lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-gray-600">Sign up</h1>
              <hr class="h-px bg-gray-400  mt-3 mb-4"/>
              <form action={"/auth/register"} method="POST" class="flex flex-col gap-y-3">
                <div>
                  <Label forInput={"email"}>Email</Label>
                  <Input required className="bg-gray-300" type="text" name="email" placeholder="blablabla@mail.com"/>
                </div>

                <div>
                  <Label className="mt-3" forInput={"email"}>Password</Label>
                  <Input required className="bg-gray-300" type="password" name="password"  placeholder=""/>
                </div>
                <Button type="submit">Sign in</Button>
              </form>

                <p class="text-center">OR</p>
                <div class="w-full">
                  <Button className="bg-black  hover:bg-gray-900">Sign up</Button>

                </div>
            </div>
            {/* <Favourites quotes={quotes}/> */}
          </ModalWrapper>

        </div>

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
    )}
export default HomePage;