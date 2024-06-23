
export default function Button({children}: {children: JSX.Element}){
    return (
        <button type="submit" class="text-white bg-orange-950 hover:bg-orange-900 transition-colors focus:ring-1 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">{children}</button>
    )
}