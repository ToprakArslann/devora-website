import { clash, clashLight, satoshi, satoshiBlack, satoshiReg } from "../fonts";

export default function Contact() {
    return (
        <section id="contact" className="flex w-full min-[1025]:h-screen items-center justify-center min-[1025]:p-10 bg-[#090909]">
            <div className="flex w-full h-full flex-col relative items-center justify-center">
                <h2 className={`uppercase z-2 min-[1025]:text-[11vw] text-[12vw] pt-5 mix-blend-overlay ${satoshiBlack.className}`}>get in touch</h2>
                <div className="flex w-full h-full min-[1025]:px-37 px-10 z-2 items-center justify-center pb-20">
                    <form action="" className="flex w-full h-full flex-col items-center gap-10 ">
                        <input type="text" className="border-b-2 w-full text-black border-black placeholder:text-black text-2xl pl-2 focus:outline-none active:outline-none " placeholder="Full Name" required />
                        <div className="w-full flex min-[1025]:flex-row flex-col items-center justify-center min-[1025]:gap-5 gap-10">
                            <input type="text" className="border-b-2 w-full text-black border-black placeholder:text-black text-2xl pl-2 focus:outline-none active:outline-none " placeholder="Email" required />
                            <input type="text" className="border-b-2 w-full text-black border-black placeholder:text-black text-2xl pl-2 focus:outline-none active:outline-none " placeholder="Phone" required />
                        </div>
                        <textarea name="Message" placeholder="Message" className="w-full border-b-2 text-2xl pl-2 min-[1025]:h-full h-[25vw]  text-black border-black placeholder:text-black focus:outline-none active:outline-none" id="" required></textarea>
                        <button type="submit" className="bg-black w-fit py-1 px-6 min-[1025]:text-3xl text-2xl hover:bg-white hover:text-black hover:underline">Submit</button>
                    </form>
                </div>
                <div className="flex w-full h-full absolute inset-0 overflow-hidden z-1">
                    <img src="texture2.png" className="w-full h-full object-cover" alt="" />
                </div>
            </div>
        </section>
    )
}
