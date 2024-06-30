export const FormInput = ({
    name, placeholder, label, type = "text"
}: {
    type?: "number" | "search" | "button" | "time" | "image" | "text" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "month" | "password" | "radio" | "range";
    name: string;
    placeholder: string;
    label: string;
}) => {
    return (
        <>
            <input type={type} name={name} id={name} class="
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
                p-2.5
            " placeholder={placeholder} required />
            <label for={name} class="peer-focus:text-white transition-colors duration-300 block mb-2 text-sm font-medium ">{label}</label>
        </>

    );
};
