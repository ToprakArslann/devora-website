import { clash, satoshi } from "./layout";

export default function Header() {
    return(
        <div className="absolute w-full top-0 z-15 mt-8 px-8">
            <div className={`w-full flex flex-row bg-white/5 py-2 px-6 backdrop-blur-sm brightness-101 rounded-full border-1 border-white/20 justify-between  ${satoshi.className}`}>
                <a className={`text-2xl`} href="">DEVORA</a>
                <div className="flex flex-row gap-5">
                   <a className="text-2xl hover:underline" href="">About Us</a>
                   <a className="text-2xl hover:underline" href="">Services</a>
                   <a className="text-2xl hover:underline" href="">References</a>
                   <a className="text-2xl hover:underline" href="">Contact</a> 
                </div>
            </div>
        </div>
    )
}
