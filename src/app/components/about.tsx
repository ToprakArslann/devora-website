import { clash, clashLight, satoshi, satoshiBlack, satoshiReg } from "../fonts";
import { VscArrowDown } from "react-icons/vsc";

export default function About() {
    return (
        <section id="about" className="w-full h-screen flex flex-col bg-white text-black">
            <div className="flex flex-row w-full h-full ">
                <div className="flex w-1/3 h-full relative text-4xl text-black py-20 px-5 after:absolute after:h-[94%] after:w-px after:bg-black/40 after:origin-center after:top-1/2 after:-translate-y-1/2 after:right-0">
                    <p className={`${satoshiReg.className}`}>Who We Are</p>
                </div>
                <div className="flex flex-col py-10 px-7 text-[2.5vw]/12 w-full relative">
                    <span className={`flex h-fit w-full pb-7 relative after:absolute after:w-full after:h-px after:bg-black/40 after:origin-center after:left-1/2 after:-translate-x-1/2 after:bottom-0 ${clash.className}`}>
                        We are a multidisciplinary team of designers and <br />
                        developers passionate about building products that <br />
                        people love. From strategy to execution, we create <br />
                        seamless digital experiences tailored to your goals.
                    </span>
                    <div className="flex flex-row w-full items-center justify-between  relative after:absolute after:w-full after:h-px after:bg-black/40 after:origin-center after:left-1/2 after:-translate-x-1/2 after:bottom-0">
                        <div className="flex h-full w-full py-10 px-10 items-center justify-center text-center leading-8 relative before:absolute before:h-[75%] before:w-px before:bg-black/40 before:top-1/2 before:-translate-y-1/2 before:right-0">
                            <span>
                                <p className="font-bold">50+</p>
                                <p className="text-xl">Completed Projects</p>
                            </span>
                        </div>
                        <div className="flex h-full w-full items-center justify-center py-10 px-10 text-center leading-8 relative before:absolute before:h-[75%] before:w-px before:bg-black/40 before:top-1/2 before:-translate-y-1/2 before:right-0">
                            <span>
                                <p className="font-bold">10+</p>
                                <p className="text-xl">Team Members</p>
                            </span>
                        </div>
                        <div className="flex h-full w-full items-center justify-center py-10 px-10 text-center leading-8 relative">
                            <span>
                                <p className="font-bold">12</p>
                                <p className="text-xl">Clients in Countries</p>
                            </span>
                        </div>
                    </div>
                    <p className="absolute bottom-10 left-7 text-xl">A collective of designers & developers <br /> shaping the digital future.</p>
                </div>
            </div>
            <div className="w-full py-2 relative px-5 items-center after:absolute after:w-[97%] after:h-px after:bg-black/40 after:origin-center after:left-1/2 after:-translate-x-1/2 after:top-0">
                <span className="text-black text-4xl uppercase">
                    <span className="flex flex-row gap-2">
                        <p className={`${satoshiReg.className}`}>our works</p>
                        <VscArrowDown />
                    </span>
                    <p className="text-2xl">2025</p>
                </span>
            </div>
        </section>
    )
}
