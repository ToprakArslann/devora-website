"use client"
import scrollToSection from "../hooks/scrollToSection"
import Beams from "@/app/components/Beams";
import { clash, clashLight, satoshi, satoshiBlack, satoshiReg } from "../fonts";
import Image from "next/image";
import { easeIn, easeInOut, easeOut, motion } from "motion/react"

export default function Hero() {
    return (
        <section className="w-full h-screen flex flex-col justify-between px-30 pt-45 pb-30 z-10 text-white">
            <div className=" flex flex-row w-full justify-between">
                <div className="flex flex-col text-5xl gap-5">
                    <motion.p initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: easeInOut,duration: 1 }}>
                       Creative digital solutions <br /> for your brand
                    </motion.p>
                    <div className="flex flex-row relative">
                        <motion.div initial={{scale: 1.2, opacity: 0 }} animate={{scale: 1, opacity: 1 }} transition={{ ease: easeInOut,duration: 1, delay:0.5 }} className="w-12 rounded-full aspect-square overflow-hidden border-2 border-[#090909] absolute">
                            <img alt="" src="avatar1.png" />
                        </motion.div>
                        <motion.div initial={{scale: 1.2, opacity: 0 }} animate={{scale: 1, opacity: 1 }} transition={{ ease: easeInOut,duration: 1, delay:0.6 }} className="w-12 rounded-full aspect-square overflow-hidden border-2 border-[#090909] absolute left-8">
                            <img alt="" src="avatar2.png" />
                        </motion.div>
                        <motion.div initial={{scale: 1.2, opacity: 0 }} animate={{scale: 1, opacity: 1 }} transition={{ ease: easeInOut,duration: 1, delay:0.7 }} className="w-12 rounded-full aspect-square overflow-hidden border-2 border-[#090909] absolute left-16">
                            <img alt="" src="avatar3.png" />
                        </motion.div>
                        <motion.div initial={{scale: 1.2, opacity: 0 }} animate={{scale: 1, opacity: 1 }} transition={{ ease: easeInOut,duration: 1, delay:0.8 }} className="w-12 rounded-full aspect-square overflow-hidden border-2 border-[#090909] absolute left-24">
                            <img alt="" src="avatar4.png" />
                        </motion.div>
                    </div>
                </div>
                <div className={`text-xl ${clashLight.className} flex flex-col relative`}>
                    <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{ease: easeInOut, duration:1, delay:0.6}}> 
                        Remote-first team delivering stunning <br /> design and scalable technology.
                    </motion.p>
                    <motion.div className="absolute right-0 top-40" initial={{scale:0.6,rotate:40, opacity:0}} animate={{scale:1,rotate:0, opacity:1}} transition={{ease: easeInOut, duration:1, delay:0.8}} whileHover={{rotate:20, transition: { duration: 1 }}}>
                        <Image width={150} height={0} src="star.svg" alt="" />
                    </motion.div>
                </div>
            </div>
            <div className="flex flex-row w-full justify-between">
                    <motion.div initial={{scale:0.6,rotate:180, opacity:0}} animate={{scale:1,rotate:360, opacity:1}} transition={{ease: easeInOut, duration:1, delay:0.8, rotate:{repeat: Infinity, duration: 5, ease: "linear"}}}>
                        <Image src="shape1.svg" width={170} height={0} alt="" />
                    </motion.div>
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