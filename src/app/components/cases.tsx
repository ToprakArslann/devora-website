import { clash, clashLight, satoshi, satoshiBlack, satoshiReg } from "../fonts";
import { BsArrowUpRight } from "react-icons/bs";
export default function Cases() {
    return (
        <section id="cases" className="w-full h-screen flex bg-white items-center justify-center text-black relative">
            <p className={`absolute top-15 text-3xl`}>We craft digital products that inspire, engage, and deliver results.</p>
            <div className="w-full grid grid-cols-4 grid-rows-2 gap-5 m-auto items-center z-2">
                <div className="flex flex-col items-center">
                    <div className="flex w-[300px] h-[370px] flex-col">
                        <div className="flex w-full h-[350px] overflow-hidden">
                            <img alt="" src="project1.png" className="object-cover" />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xl">NexaPay</p>
                            <BsArrowUpRight />
                        </div>
                    </div>
                </div>
                <div></div>
                <div className="flex flex-col items-center">
                    <div className="flex w-[300px] h-[370px] flex-col">
                        <div className="flex w-full h-[350px] overflow-hidden">
                            <img alt="" src="project3.png" className="object-cover" />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xl">Floria</p>
                            <BsArrowUpRight />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <a className="flex py-1 px-2 text-center bg-black text-white text-3xl hover:bg-white hover:text-black hover:underline" href="">See More Work</a>
                </div>
                <div></div>
                <div className="flex flex-col items-center">
                    <div className="flex w-[300px] h-[370px] flex-col">
                        <div className="flex w-full h-[350px] overflow-hidden">
                            <img alt="" src="project2.png" className="object-cover" />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xl">Loomio</p>
                            <BsArrowUpRight />
                        </div>
                    </div>
                </div>
                <div></div>
                <div className="flex flex-col items-center">
                    <div className="flex w-[300px] h-[370px] flex-col">
                        <div className="flex w-full h-[350px] overflow-hidden">
                            <img alt="" src="project4.png" className="object-cover" />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xl">CineWave</p>
                            <BsArrowUpRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 px-5 mb-10 flex flex-col w-full leading-65 z-1 text-black/40 font-black">
                <h2 className="uppercase text-[15vw]">DEVORA</h2>
                <h2 className="uppercase text-[15vw] text-end">Systems</h2>
            </div>
        </section>
    )
}
