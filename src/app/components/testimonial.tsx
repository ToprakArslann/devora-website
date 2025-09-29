import { clash, clashLight, satoshi, satoshiBlack, satoshiReg } from "../fonts";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { BsArrowUpRight } from "react-icons/bs";
export default function Testimonial() {
    return (
        <section id="references" className={`flex flex-col w-full h-screen relative ${satoshi.className} bg-[#090909]`}>
            <Image width={180} height={0} alt="" className="absolute top-10 right-10" src="shape2.svg" />
            <Image width={85} height={0} className="absolute top-10 left-10" alt="" src="quotes.svg" />
            <div className="flex w-full px-50 py-30 flex-col h-fit">
                <span className={`flex flex-col gap-5`}>
                    <p className="text-5xl">What our clients say</p>
                    <p className="text-2xl"> -Real stories from the teams we’ve partnered with.</p>
                </span>
            </div>
            <div className="flex flex-row relative w-full h-full mb-20 border-t-1 border-[#666666] items-center justify-stretch">
                <div className="flex h-full testimonial">
                    <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar2.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="text-4xl text-white py-10 h-full w-full flex">World-class design and execution. Truly exceeded expectations.</div>
                        <div className="text-2xl text-white w-full flex"> — Michael B., CEO @ Floria</div>
                    </div>
                    <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar1.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="text-4xl text-white py-10 h-full w-full flex">From concept to launch, the team felt like an extension of our own. Beautiful design, flawless execution.</div>
                        <div className="text-2xl text-white w-full flex"> — Sofia M., Creative Director @ CineWave</div>
                    </div>
                    <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar3.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="text-4xl text-white py-10 h-full w-full flex">Working with Devora was like unlocking a cheat code. They transformed our idea into a live product in record time.</div>
                        <div className="text-2xl text-white w-full flex">— Daniel K., CEO @ Loomio</div>
                    </div>
                    <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar4.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="text-4xl text-white py-10 h-full w-full flex">They don’t just build products, they craft digital experiences. Truly world-class.</div>
                        <div className="text-2xl text-white w-full flex">— John R., Product Manager @ NexaPay</div>
                    </div>
                    <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar2.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="text-4xl text-white py-10 h-full w-full flex">World-class design and execution. Truly exceeded expectations.</div>
                        <div className="text-2xl text-white w-full flex"> — Michael B., CEO @ Floria</div>
                    </div>
                    <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar1.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="text-4xl text-white py-10 h-full w-full flex">From concept to launch, the team felt like an extension of our own. Beautiful design, flawless execution.</div>
                        <div className="text-2xl text-white w-full flex"> — Sofia M., Creative Director @ CineWave</div>
                    </div>
                    <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar3.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="text-4xl text-white py-10 h-full w-full flex">Working with Devora was like unlocking a cheat code. They transformed our idea into a live product in record time.</div>
                        <div className="text-2xl text-white w-full flex">— Daniel K., CEO @ Loomio</div>
                    </div>
                    <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar4.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                    <IoMdStar size={25} className="text-orange-300" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="text-4xl text-white py-10 h-full w-full flex">They don’t just build products, they craft digital experiences. Truly world-class.</div>
                        <div className="text-2xl text-white w-full flex">— John R., Product Manager @ NexaPay</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
