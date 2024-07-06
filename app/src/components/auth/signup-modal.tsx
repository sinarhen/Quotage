import Button from "../button";
import { Input, Label } from "../form-input";

export default function AuthModal({
    registerAction,
    registerMethod,
    hidden,
    id
}: {
    registerAction: string
    registerMethod: string;
    loginAction: string;
    loginMethod: string;
    hidden?:boolean;
    id: string
}){
    return (
        <>
        <div id={id} class={(hidden ? "hidden " : "")+ "max-w-lg py-6 px-4 rounded-lg w-full bg-white h-full"}>
            <h1 class="italic lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-gray-600">Sign up</h1>
            <hr class="h-px bg-gray-400  mt-3 mb-4"/>
            
            <form action={registerAction} method={registerMethod} class="flex flex-col gap-y-3">
                <div>
                    <Label forInput={"email"}>Email</Label>
                    <Input required className="bg-gray-300 focus:text-black" type="text" name="email" placeholder="blablabla@mail.com"/>
                </div>

                <div>
                    <Label className="mt-3" forInput={"email"}>Password</Label>
                    <Input required className="bg-gray-300 focus:text-black" type="password" name="password"  placeholder=""/>
                </div>
                <Button type="submit">Sign in</Button>
            </form>
            <p class="text-center">OR</p>
            <div class="w-full">
                <Button className="bg-black  hover:bg-gray-900">Sign up</Button>
            </div>
        </div>
        </>
        
    )
}