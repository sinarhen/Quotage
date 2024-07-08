import Button from "../button";
import { Input, Label } from "../form-input";

const AuthForm = ({
    action,
    method,
    disabled,
    isRegister
}: {
    action: string,
    method: string;
    disabled: boolean;
    isRegister: boolean;
}) => {
    return (
        <form id="auth-form" action={action} method={method} class="flex flex-col gap-y-3">
            <div id="username-field" style={{ display: isRegister ? 'block' : 'none' }}>
                <Label forInput={"username"}>Username</Label>
                <Input required className="bg-gray-300 focus:text-black" type="text" name="username" placeholder="username" />
            </div>
            <div>
                <Label forInput={"email"}>Email</Label>
                <Input required className="bg-gray-300 focus:text-black" type="text" name="email" placeholder="blablabla@mail.com" />
            </div>
            <div>
                <Label className="mt-3" forInput={"password"}>Password</Label>
                <Input required className="bg-gray-300 focus:text-black" type="password" name="password" placeholder="" />
            </div>
            <Button disabled={disabled} type="submit">{isRegister ? "Sign up" : "Sign in"}</Button>
        </form>
    );
};

export default function AuthModal({
    hidden,
    id
}: {
    hidden?: boolean;
    id: string;
}) {
    const headerId = "auth-modal-header";

    return (
        <>
            <div data-islogin={true} id={id} class={(hidden ? "hidden " : "") + "max-w-lg py-6 px-4 rounded-lg w-full bg-white h-full"}>
                <h1
                    id={headerId}
                    class="italic lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-gray-600">
                    Sign in
                </h1>
                <hr class="h-px bg-gray-400 mt-3 mb-4" />
                
                <AuthForm action={"/auth/login"} method={"POST"} disabled={false} isRegister={false} />

                <p class="text-center">OR</p>
                <div class="w-full">
                    <Button id="toggle-button" className="bg-black hover:bg-gray-900">Sign up</Button>
                </div>
            </div>

            <script src="/public/js/auth-modal-script.js">
            </script>
        </>
    );
}
