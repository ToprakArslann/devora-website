"use client"
import scrollToSection from "../hooks/scrollToSection"
import Beams from "@/app/components/Beams";
import { clash, clashLight, satoshi, satoshiBlack, satoshiReg } from "../fonts";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full h-screen flex flex-col justify-between px-30 pt-45 pb-30 z-10 text-white">
            <div className=" flex flex-row w-full justify-between">
                <div className="flex flex-col text-5xl gap-5">
                    Creative digital solutions <br /> for your brand
                    <div className="flex flex-row relative">
                        <div className="w-12 rounded-full aspect-square overflow-hidden border-2 border-[#090909] absolute">
                            <img alt="" src="avatar1.png" />
                        </div>
                        <div className="w-12 rounded-full aspect-square overflow-hidden border-2 border-[#090909] absolute left-8">
                            <img alt="" src="avatar2.png" />
                        </div>
                        <div className="w-12 rounded-full aspect-square overflow-hidden border-2 border-[#090909] absolute left-16">
                            <img alt="" src="avatar3.png" />
                        </div>
                        <div className="w-12 rounded-full aspect-square overflow-hidden border-2 border-[#090909] absolute left-24">
                            <img alt="" src="avatar4.png" />
                        </div>
                    </div>
                </div>
                <div className={`text-xl ${clashLight.className} flex flex-col relative`}>
                    Remote-first team delivering stunning <br /> design and scalable technology.
                    <Image width={70} height={0} src="arrows.svg" alt="" />
                    <Image width={150} height={0} src="star.svg" className="absolute right-0 top-40" alt="" />
                </div>
            </div>
            <div className="flex flex-row w-full justify-between">
                <Image src="shape1.svg" width={170} height={0} alt="" />
                <div className="flex items-center px-35">
                    <button onClick={() => scrollToSection("cases")} className={`text-3xl ${satoshi.className} bg-white text-black py-1 px-2 hover:bg-black hover:text-white hover:underline`}>View Our Work</button>
                </div>
            </div>
            <div className="flex absolute -z-5 inset-0 w-full h-screen">
                <Beams
                    beamWidth={2}
                    beamHeight={30}
                    beamNumber={20}
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={30}
                />
            </div>
        </section>
    )
}