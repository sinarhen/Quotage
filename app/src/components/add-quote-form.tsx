import { HTMXSwapAttribute } from '../../lib/config/types';
import { Input, Label } from './form-input';

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
    
        class="w-full h-full text-gray-500 text-sm"> 
            <Label forInput='author'>Author</Label>
            <Input 
                className="md:w-1/2 mb-3  "
                name='author'
                placeholder='Marcus Avrelius'
                label='Author'    
            />
            
            <Label className="mt-3" forInput='quote'>
                Quote
            </Label>
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
        

        <div class="flex sm:flex-row flex-col mt-3 gap-x-5">
                <div>
                    <Label forInput='birthYear'>
                        Birth Year
                    </Label>
                    <Input 
                            name='birthYear'
                            type='number'
                            placeholder='-3200'
                            label='Birth year'    
                        />

                </div>
                
                <div>
                    <Label forInput='deathYear'>
                        Death year
                    </Label>
                    <Input 
                            name='deathYear'
                            type='number'
                            placeholder='1223'
                            label='Death year'    
                        />
                </div>
                
        </div>
        <button type="submit" class="text-white bg-orange-950 mt-4 hover:bg-orange-900 transition-colors focus:ring-1 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Publish</button>
    </form>)
}

export default AddQuoteForm;