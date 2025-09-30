import { clash, clashLight, satoshi, satoshiBlack, satoshiReg } from "../fonts";
import { BsArrowUpRight } from "react-icons/bs";
export default function Cases() {
    return (
        <section id="cases" className="w-full min-h-screen flex bg-white items-center justify-center text-black relative max-[1025]:py-10">
            <div className="w-full h-full grid min-[1025]:grid-cols-4 grid-cols-2 min-[1025]:grid-rows-2 min-[1025]:gap-5 m-auto items-center z-2">
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <div className="flex min-[1025]:h-[25vw] h-[60vw] aspect-[3/4] flex-col">
                        <div className="flex w-full h-full overflow-hidden">
                            <img alt="" src="project1.png" className="object-cover" />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xl">NexaPay</p>
                            <BsArrowUpRight />
                        </div>
                    </div>
                </div>
                <div className="max-[1025]:hidden"></div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex min-[1025]:h-[25vw] h-[60vw] aspect-[3/4] flex-col">
                        <div className="flex w-full h-full overflow-hidden">
                            <img alt="" src="project3.png" className="object-cover" />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xl">Floria</p>
                            <BsArrowUpRight />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <a className="flex py-1 px-2 text-center bg-black text-white min-lg:text-3xl text-xl hover:bg-white hover:text-black hover:underline" href="">See More Work</a>
                </div>
                <div className="max-[1025]:hidden"></div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex min-[1025]:h-[25vw] h-[60vw] aspect-[3/4] flex-col">
                        <div className="flex w-full h-full overflow-hidden">
                            <img alt="" src="project2.png" className="object-cover" />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xl">Loomio</p>
                            <BsArrowUpRight />
                        </div>
                    </div>
                </div>
                <div className="max-[1025]:hidden"></div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex min-[1025]:h-[25vw] h-[60vw] aspect-[3/4] flex-col">
                        <div className="flex w-full h-full overflow-hidden">
                            <img alt="" src="project4.png" className="object-cover" />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xl">CineWave</p>
                            <BsArrowUpRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute max-lg:hidden bottom-0 left-0 px-5 mb-10 flex flex-col w-full leading-65 z-1 text-black/40 font-black">
                <h2 className="uppercase text-[15vw]">DEVORA</h2>
                <h2 className="uppercase text-[15vw] text-end">Systems</h2>
            </div>
        </section>
    )
}
