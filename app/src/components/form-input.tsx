import { cn } from "../../lib/config/utils";

export const Input = ({
    name, placeholder, className, type = "text", required
}: {
    type?: "number" | "search" | "button" | "time" | "image" | "text" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "month" | "password" | "radio" | "range";
    name: string;
    required?: boolean;
    placeholder: string;
    className?: string
}) => {
    return (
            <input type={type} name={name} id={name} 
            class={cn("bg-zinc-800 border border-gray-300 text-sm rounded-lg peer duration-300 focus:border-white focus:text-white transition-all block w-full p-2.5", className)} placeholder={placeholder} required />
            
    );
};

export const Label = ({
    forInput, className, children
}: {
    forInput?: string
    className?: string;
    children?: JSX.Element
}) => {
    return (
        <label for={forInput} class={className}>
            {children}
        </label>    
    )
}
