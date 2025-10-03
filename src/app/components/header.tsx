"use client"
import scrollToSection from "../hooks/scrollToSection"
import { clash, satoshi } from "../fonts";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className="fixed w-full top-0 z-15 mt-5 px-5 mix-blend-difference">
            <div className={`w-full flex flex-row rounded-full justify-between ${satoshi.className}`}>
                    <a className="flex flex-shrink-0 text-2xl text-black py-1 px-2 bg-white h-fit" href="">
                        DEVORA
                    </a>
                <div className="min-sm:flex hidden flex-row gap-5 items-center">
                   <button onClick={() => scrollToSection("about")} className="text-2xl text-white hover:underline hover:bg-white hover:text-black py-1 px-2 hover:cursor-pointer">About Us</button>
                   <button onClick={() => scrollToSection("cases")} className="text-2xl text-white hover:underline hover:bg-white hover:text-black py-1 px-2 hover:cursor-pointer">Cases</button>
                   <button onClick={() => scrollToSection("references")} className="text-2xl text-white hover:underline hover:bg-white hover:text-black py-1 px-2 hover:cursor-pointer">References</button>
                   <button onClick={() => scrollToSection("contact")} className="text-2xl hover:underline text-black bg-white py-1 px-2 hover:bg-white hover:text-black hover:cursor-pointer">Contact</button> 
                </div>
                <div className="min-sm:hidden flex items-center justify-center relative">
                    <button className="flex h-full bg-white items-center justify-center py-2 px-2" onClick={() => setMenuOpen(!menuOpen)}>
                        <CiMenuBurger className="text-black text-2xl"/>
                    </button>
                    <div className={`${menuOpen ? "flex" : "hidden"} flex-col gap-2 absolute -bottom-50 right-0 items-end justify-center`}>
                        <button onClick={() => scrollToSection("about")} className="text-2xl text-black bg-white hover:underline hover:bg-white hover:text-black py-1 px-2 hover:cursor-pointer">About Us</button>
                        <button onClick={() => scrollToSection("cases")} className="text-2xl text-black bg-white hover:underline hover:bg-white hover:text-black py-1 px-2 hover:cursor-pointer">Cases</button>
                        <button onClick={() => scrollToSection("references")} className="text-2xl text-black bg-white hover:underline hover:bg-white hover:text-black py-1 px-2 hover:cursor-pointer">References</button>
                        <button onClick={() => scrollToSection("contact")} className="text-2xl hover:underline text-black bg-white py-1 px-2 hover:bg-white hover:text-black hover:cursor-pointer">Contact</button> 
                    </div>
                </div>
            </div>
        </div>
    )
}
