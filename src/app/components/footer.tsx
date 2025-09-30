"use client"
import scrollToSection from "../hooks/scrollToSection"
export default function Footer() {
    return(
        <div className="flex min-[600px]:flex-row flex-col w-full relative px-5 overflow-hidden justify-between bg-[#090909]">
            <div className="flex flex-col relative min-[600px]:pb-15 pb-5 gap-5">
                <span>
                    <h2 className="min-[600px]:text-[7vw] text-[15vw] font-black uppercase">Devora</h2>
                    <p className="min-[600px]:text-[1.5vw] text-[5vw]">We craft seamless digital experiences through design and code.</p>
                </span>
                <ul className="ml-6 min-[600px]:text-[1.5vw] text-[5vw]">
                    <li className="list-disc">
                        <button onClick={() => scrollToSection("about")} className="hover:underline hover:cursor-pointer">About</button>
                    </li>
                    <li className="list-disc">
                        <button onClick={() => scrollToSection("cases")} className="hover:underline hover:cursor-pointer">Our Work / Cases</button>
                    </li>
                    <li className="list-disc">
                        <button onClick={() => scrollToSection("references")} className="hover:underline hover:cursor-pointer">Testimonials</button>
                    </li>
                    <li className="list-disc">
                        <button onClick={() => scrollToSection("contact")} className="hover:underline hover:cursor-pointer">Contact</button>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center min-[600px]:pr-20 gap-2 max-[600px]:pb-22">
                <p className="min-[600px]:text-2xl text-xl">Stay updated. Join our newsletter.</p>
                <form action="" className="flex flex-row items-center">
                    <input type="text" placeholder="Enter Your Mail" className="bg-white text-black px-2 placeholder:text-black/40 py-1.5 w-[250px] active:border-none active:outline-none focus:border-none focus:outline-none"/>
                    <button type="submit" className="bg-black py-1 px-2 text-xl hover:bg-white hover:underline hover:text-black">Signup</button>
                </form>
            </div>
            <span className="text-white/40 flex flex-row max-[600px]:flex-col absolute max-[600px]:bottom-8 bottom-2 w-full left-1/2 -translate-x-1/2 px-5 items-center justify-between">
                <p>hello@devora.com +1 (555) 123-4567</p>
                <p>San Francisco, CA</p>
            </span>
            <p className="absolute bottom-2 w-full items-center justify-center text-center left-1/2 -translate-x-1/2 text-white/40"> © 2025 Devora Systems. All rights reserved.</p>
        </div>
    )
}