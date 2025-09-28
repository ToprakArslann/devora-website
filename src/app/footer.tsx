export default function Footer() {
    return(
        <div className="flex flex-row w-full relative px-5 overflow-hidden justify-between">
            <div className="flex flex-col relative pb-15">
                <span>
                    <h2 className="text-9xl font-black uppercase">Devora</h2>
                    <p className="text-3xl">We craft seamless digital experiences through design and code.</p>
                </span>
                <ul className="ml-6 text-2xl">
                    <li className="list-disc">
                        <a href="" className="hover:underline">About</a>
                    </li>
                    <li className="list-disc">
                        <a href="" className="hover:underline">Services</a>
                    </li>
                    <li className="list-disc">
                        <a href="" className="hover:underline">Our Work / Cases</a>
                    </li>
                    <li className="list-disc">
                        <a href="" className="hover:underline">Testimonials</a>
                    </li>
                    <li className="list-disc">
                        <a href="" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center pr-20 gap-2">
                <p className="text-2xl">Stay updated. Join our newsletter.</p>
                <form action="" className="flex flex-row items-center">
                    <input type="text" placeholder="Enter Your Mail" className="bg-white text-black px-2 placeholder:text-black/40 py-1.5 w-[250px] active:border-none active:outline-none focus:border-none focus:outline-none"/>
                    <button type="submit" className="bg-black py-1 px-2 text-xl hover:bg-white hover:underline hover:text-black">Signup</button>
                </form>
            </div>
            <span className="text-xl text-white/40 flex flex-row absolute bottom-2 w-full left-1/2 -translate-x-1/2 px-5 items-center justify-between">
                <p>hello@devora.com +1 (555) 123-4567</p>
                <p>San Francisco, CA</p>
            </span>
            <p className="absolute bottom-2 w-full items-center justify-center text-center left-1/2 -translate-x-1/2 text-white/40"> © 2025 Devora Systems. All rights reserved.</p>
        </div>
    )
}