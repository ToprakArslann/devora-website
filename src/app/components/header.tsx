"use client"
import scrollToSection from "../hooks/scrollToSection"
import { clash, satoshi } from "../fonts";

export default function Header() {
    return(
        <div className="fixed w-full top-0 z-15 mt-5 px-5 mix-blend-difference">
            <div className={`w-full flex flex-row rounded-full justify-between ${satoshi.className}`}>
                    <a className="text-2xl text-black py-1 px-2 bg-white" href="">
                        DEVORA
                    </a>
                <div className="flex flex-row gap-5 items-center">
                   <button onClick={() => scrollToSection("about")} className="text-2xl text-white hover:underline hover:bg-white hover:text-black py-1 px-2 hover:cursor-pointer">About Us</button>
                   <button onClick={() => scrollToSection("cases")} className="text-2xl text-white hover:underline hover:bg-white hover:text-black py-1 px-2 hover:cursor-pointer">Cases</button>
                   <button onClick={() => scrollToSection("references")} className="text-2xl text-white hover:underline hover:bg-white hover:text-black py-1 px-2 hover:cursor-pointer">References</button>
                   <button onClick={() => scrollToSection("contact")} className="text-2xl hover:underline text-black bg-white py-1 px-2 hover:bg-white hover:text-black hover:cursor-pointer">Contact</button> 
                   
                </div>
            </div>
        </div>
    )
}
