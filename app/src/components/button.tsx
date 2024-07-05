import { cn } from "../../lib/config/utils";

export default function Button({
    children,
    type = "button",
    hxGet,
    hxPost,
    hxTrigger,
    hxSwap, 
    className
}: {
    children: JSX.Element; 
    type?: string; className?: string | null;
    hxGet?: string;
    hxPost?: string;
    hxSwap?: string;
    hxTrigger?: string
}){
    return (
        <button
            hx-get={hxGet}
            hx-post={hxPost}
            hx-trigger={hxTrigger}
            hx-swap={hxSwap}

        type={type} class={cn("text-white bg-orange-950 hover:bg-orange-900 transition-colors focus:ring-1 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ", className)}>{children}</button>
    )
}