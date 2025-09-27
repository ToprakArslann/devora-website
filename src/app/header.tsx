import { clash, satoshi } from "./layout";

export default function Header() {
    return(
        <div className="fixed w-full top-0 z-15 mt-5 px-5 mix-blend-difference">
            <div className={`w-full flex flex-row rounded-full justify-between ${satoshi.className}`}>
                    <a className="text-2xl text-black py-1 px-2 bg-white" href="">
                        DEVORA
                    </a>
                <div className="flex flex-row gap-5 items-center">
                   <a className="text-2xl hover:underline hover:bg-white hover:text-black py-1 px-2" href="">About Us</a>
                   <a className="text-2xl hover:underline hover:bg-white hover:text-black py-1 px-2" href="">Services</a>
                   <a className="text-2xl hover:underline hover:bg-white hover:text-black py-1 px-2" href="">References</a>
                   <a className="text-2xl hover:underline text-black bg-white py-1 px-2 hover:bg-white hover:text-black" href="">Contact</a> 
                   
                </div>
            </div>
        </div>
    )
}
