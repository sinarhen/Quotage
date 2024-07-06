export default function ModalWrapper({children, id, isInitiallyOpened = false}: {
    children?: JSX.Element;
    isInitiallyOpened: boolean;
    id?: string;
}){
    return (
        <div id={id} class={(isInitiallyOpened ? "hidden " : "") + " fixed z-[100]  flex md:px-12 md:py-8 px-2 py-3 items-center justify-center w-full h-full bg-black/30 backdrop-blur-sm "} >
            <button onclick="this.parentNode.classList.add('hidden')" class="left-2 text-white top-2 absolute h-10 w-10">
                Close
            </button>
            {children}
        </div>
    )
}