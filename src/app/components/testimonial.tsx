import { clash, clashLight, satoshi, satoshiBlack, satoshiReg } from "../fonts";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { BsArrowUpRight } from "react-icons/bs";
export default function Testimonial() {
    return (
        <section id="references" className={`flex flex-col w-full min-[1025]:min-h-screen relative ${satoshi.className} bg-[#090909]`}>
            <Image width={180} height={0} alt="" className="absolute min-[1025]:top-10 top-70 z-1 right-10 max-[1025]:hidden" src="shape2.svg" />
            <Image width={85} height={0} className="absolute top-10 left-10 max-[1025]:hidden" alt="" src="quotes.svg" />
            <div className="flex w-full min-[1025]:px-50 min-[1025]:py-30 py-10 flex-col h-fit">
                <span className={`flex flex-col gap-5 min-[1025]:items-center justify-center text-center`}>
                    <p className="min-[1025]:text-5xl text-3xl max-[1025]:font-bold">What our clients say</p>
                    <p className="min-[1025]:text-2xl text-lg"> -Real stories from the teams we’ve partnered with.</p>
                </span>
            </div>
            <div className="flex flex-row relative w-full h-full min-[1025]:mb-20 mb-10 border-t-1 border-[#666666] items-center justify-stretch">
                <div className="flex h-full testimonial">
                    <div className="flex flex-col text-black min-[1025]:w-120 min-[1025]:h-[550px] w-90 h-[450px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar2.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="min-[1025]:text-4xl text-2xl text-white py-10 h-full w-full flex">World-class design and execution. Truly exceeded expectations.</div>
                        <div className="min-[1025]:text-2xl text-xl  text-white w-full flex"> — Michael B., CEO @ Floria</div>
                    </div>
                    <div className="flex flex-col text-black min-[1025]:w-120 min-[1025]:h-[550px] w-90 h-[450px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar1.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="min-[1025]:text-4xl text-2xl text-white py-10 h-full w-full flex">From concept to launch, the team felt like an extension of our own. Beautiful design, flawless execution.</div>
                        <div className="min-[1025]:text-2xl text-xl text-white w-full flex"> — Sofia M., Creative Director @ CineWave</div>
                    </div>
                    <div className="flex flex-col text-black min-[1025]:w-120 min-[1025]:h-[550px] w-90 h-[450px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar3.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="min-[1025]:text-4xl text-2xl text-white py-10 h-full w-full flex">Working with Devora was like unlocking a cheat code. They transformed our idea into a live product in record time.</div>
                        <div className="min-[1025]:text-2xl text-xl text-white w-full flex">— Daniel K., CEO @ Loomio</div>
                    </div>
                    <div className="flex flex-col text-black min-[1025]:w-120 min-[1025]:h-[550px] w-90 h-[450px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar4.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="min-[1025]:text-4xl text-2xl text-white py-10 h-full w-full flex">They don’t just build products, they craft digital experiences. Truly world-class.</div>
                        <div className="min-[1025]:text-2xl text-xl text-white w-full flex">— John R., Product Manager @ NexaPay</div>
                    </div>
                    <div className="flex flex-col text-black min-[1025]:w-120 min-[1025]:h-[550px] w-90 h-[450px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar2.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="min-[1025]:text-4xl text-2xl text-white py-10 h-full w-full flex">World-class design and execution. Truly exceeded expectations.</div>
                        <div className="min-[1025]:text-2xl text-xl text-white w-full flex"> — Michael B., CEO @ Floria</div>
                    </div>
                    <div className="flex flex-col text-black min-[1025]:w-120 min-[1025]:h-[550px] w-90 h-[450px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar1.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="min-[1025]:text-4xl text-2xl text-white py-10 h-full w-full flex">From concept to launch, the team felt like an extension of our own. Beautiful design, flawless execution.</div>
                        <div className="min-[1025]:text-2xl text-xl text-white w-full flex"> — Sofia M., Creative Director @ CineWave</div>
                    </div>
                    <div className="flex flex-col text-black min-[1025]:w-120 min-[1025]:h-[550px] w-90 h-[450px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar3.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="min-[1025]:text-4xl text-2xl text-white py-10 h-full w-full flex">Working with Devora was like unlocking a cheat code. They transformed our idea into a live product in record time.</div>
                        <div className="min-[1025]:text-2xl text-xl text-white w-full flex">— Daniel K., CEO @ Loomio</div>
                    </div>
                    <div className="flex flex-col text-black min-[1025]:w-120 min-[1025]:h-[550px] w-90 h-[450px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className=" flex flex-row rounded-full items-center gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img alt="" src="avatar4.png" className="object-cover" />
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                    <IoMdStar  className="text-orange-300 size-[25px]" />
                                </div>
                            </div>
                            <BsArrowUpRight size={25} className="text-white/40" />
                        </div>
                        <div className="min-[1025]:text-4xl text-2xl text-white py-10 h-full w-full flex">They don’t just build products, they craft digital experiences. Truly world-class.</div>
                        <div className="min-[1025]:text-2xl text-xl text-white w-full flex">— John R., Product Manager @ NexaPay</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
