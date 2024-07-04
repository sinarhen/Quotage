export default function ModalWrapper({children}: {
    children?: JSX.Element
}){
    return (
        <div class="fixed z-[100] flex md:px-12 md:py-8 px-2 py-3 items-center justify-center w-full h-full bg-black/30 backdrop-blur-sm " >
            {children}
        </div>
    )
}