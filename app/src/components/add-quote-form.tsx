import { HTMXSwapAttribute } from '../../lib/config/types';
import { FormInput } from './form-input';

interface AddQuoteFormProps {
    hxPost: string,
    hxTarget: string,
    hxSwap: HTMXSwapAttribute;

}

const AddQuoteForm = ({
    hxPost,
    hxTarget,
    hxSwap
}: AddQuoteFormProps) => {
    return (<form 
        hx-post={hxPost}
        hx-target={hxTarget}
        hx-swap={hxSwap}
    
        class="w-full"> 
        <div class="mb-2 flex flex-col-reverse text-gray-400 text-opacity-90 sm:w-1/2">
            <FormInput 
                name='author'
                placeholder='Marcus Avrelius'
                label='Author'    
            />
        </div>
        <div class="mb-2 flex flex-col-reverse text-gray-400 text-opacity-90">
            <textarea cols='40' rows='6' name='quote' id="quote" class="
                bg-zinc-800 
                border 
                border-gray-300
                text-sm 
                rounded-lg 
                peer
                duration-300
                focus:border-white
                focus:text-white
                transition-all 
                block 
                w-full 
                p-2.5" required placeholder="There is but one thing of real value..."/>
            <label for="quote" class="peer-focus:text-white transition-colors duration-300 block mb-2 text-sm font-medium ">Quote</label>
        
        </div>
        <div class="flex sm:flex-row flex-col gap-x-5">

            <div class="mb-2  flex flex-col-reverse text-gray-400 text-opacity-90 sm:w-1/2">
                <FormInput 
                        name='birthYear'
                        type='number'
                        placeholder='-3200'
                        label='Birth year'    
                    />
            </div>

            
            <div class="mb-2 flex flex-col-reverse text-gray-400 text-opacity-90 sm:w-1/2">
                <FormInput 
                        name='deathYear'
                        type='number'
                        placeholder='1223'
                        label='Death year'    
                    />
            </div>
        </div>
        <button type="submit" class="text-white bg-orange-950 hover:bg-orange-900 transition-colors focus:ring-1 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Publish</button>
    </form>)
}

export default AddQuoteForm;