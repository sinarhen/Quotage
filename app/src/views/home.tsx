import { Quote } from "../../lib/db/schema";
import AddQuoteForm from "../components/add-quote-form";
import AuthModal from "../components/auth/signup-modal";
import FavoritesModal from "../components/favourites";
import Layout from "../components/layout";
import ModalWrapper from "../components/modal-wrapper";
import QuoteCard from "../components/quote-card";
import { User } from 'lucia';

const QuoteSection = ({ quotes }: {
  quotes: Quote[]
}) => (
  <section class="md:w-[70%] md:overflow-y-scroll h-full lg:px-14 px-8 py-12">
    <h1 class="md:text-right text-center mb-6  lg:text-5xl md:text-4xl sm:text-3xl text-2xl italic">Here are your daily quotes</h1>
    <div id="quotes" class="grid gap-x-3 gap-y-4  lg:grid-cols-2">
      {quotes.map((quoteExample) => (
        <QuoteCard  {...quoteExample} />
      ))}
    </div>
  </section>
);

const Sidebar = ({ user, openSignUpModal, openFavoritesModal }: {
  user: User | null,
  openSignUpModal: string;
  openFavoritesModal: string;
}) => (
  <aside class="h-full overflow-hidden md:w-[30%] w-full relative">
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
        
        <div>

          <div 
            class="bg-black/40 flex mt-4 items-center justify-center py-2 px-4 hover:bg-black transition-colors text-white hover:text-gray-200" 
            onclick={user ? openFavoritesModal : openSignUpModal}
          >
            {user ? "Favorites" : "Authenticate"}
          </div>
          
          {user && (
            <a
              class="bg-black/40 cursor-pointer flex mt-1.5 items-center justify-center py-2 px-4 hover:bg-black transition-colors text-white hover:text-gray-200" 
              href="/auth/logout"
            >
              {user.email}
            </a>
          )}
        </div>
      </div>
    </div>
  </aside>
);

const HomePage = async (quotes: Quote[], user: User | null) => {
  const modalWrapperId = "modal-wrapper";
  const authModalId = "auth-modal";
  const favoritesModalId = "favorites-modal";
  
  const openSignUpModal = `
    document.getElementById("${modalWrapperId}")?.classList.remove("hidden");
    document.getElementById("${authModalId}")?.classList.remove("hidden");
  `;
  
  const openFavoritesModal = `
    document.getElementById("${modalWrapperId}")?.classList.remove("hidden");
    document.getElementById("${favoritesModalId}")?.classList.remove("hidden");
  `;
  
  return (
    <Layout title="Quotage | Home Page">
      <>
        <ModalWrapper isInitiallyOpened={true} id={modalWrapperId}>
          <>
            <AuthModal hidden id={authModalId} />
            <FavoritesModal hidden id={favoritesModalId} />
          </>
        </ModalWrapper>
        
        <div class="w-full h-full flex md:flex-row flex-col">
          <Sidebar user={user} openSignUpModal={openSignUpModal} openFavoritesModal={openFavoritesModal} />
          <QuoteSection quotes={quotes} />
        </div>
      </>
    </Layout>
  );
};

export default HomePage;
