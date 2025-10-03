"use client";
import { useRef } from "react";
import { clash, clashLight, satoshi, satoshiBlack, satoshiReg } from "../fonts";
import { VscArrowDown } from "react-icons/vsc";
import { useTransform, useScroll, motion } from "motion/react";

export default function About() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const worksX = useTransform(scrollYProgress, [0.5,0.7], [0, 80])

    return (
        <section id="about" ref={container} className="w-full h-screen flex flex-col bg-white text-black">
            <div className="flex min-lg:flex-row flex-col w-full h-full ">
                <div className="flex w-1/3 min-lg:h-full max-lg:w-full relative min-lg:text-4xl text-2xl text-black min-lg:py-20 py-5 px-5 min-lg:after:absolute max-lg:after:hidden after:h-[94%] after:w-px after:bg-black/40 after:origin-center after:top-1/2 after:-translate-y-1/2 after:right-0">
                    <p className={`${satoshiReg.className}`}>Who We Are</p>
                </div>
                <div className="flex flex-col py-10 px-7 w-full h-full relative">
                    <span className={`flex h-fit  w-full min-lg:text-[2.5vw]/12 text-xl pb-7 relative after:absolute after:w-full after:h-px after:bg-black/40 after:origin-center after:left-1/2 after:-translate-x-1/2 after:bottom-0 ${clash.className}`}>
                        We are a multidisciplinary team of designers and <br className="max-lg:hidden"/>
                        developers passionate about building products that <br className="max-lg:hidden"/>
                        people love. From strategy to execution, we create <br className="max-lg:hidden"/>
                        seamless digital experiences tailored to your goals.
                    </span>
                    <div className="flex flex-row w-full min-lg:text-[2vw] text-[5vw] items-center justify-between  relative after:absolute after:w-full after:h-px after:bg-black/40 after:origin-center after:left-1/2 after:-translate-x-1/2 after:bottom-0">
                        <div className="flex h-full w-full min-lg:py-10 py-5 min-lg:px-10 px-5 items-center justify-center text-center leading-8 relative before:absolute before:h-[75%] before:w-px before:bg-black/40 before:top-1/2 before:-translate-y-1/2 before:right-0">
                            <span>
                                <p className="font-bold">50+</p>
                                <p className="min-lg:text-xl text-sm">Completed Projects</p>
                            </span>
                        </div>
                        <div className="flex h-full w-full items-center justify-center min-lg:py-10 py-5 min-lg:px-10 px-5 text-center leading-8 relative before:absolute before:h-[75%] before:w-px before:bg-black/40 before:top-1/2 before:-translate-y-1/2 before:right-0">
                            <span>
                                <p className="font-bold">10+</p>
                                <p className="min-lg:text-xl text-sm">Team Members</p>
                            </span>
                        </div>
                        <div className="flex h-full w-full items-center justify-center min-lg:py-10 py-5 min-lg:px-10 px-5 text-center leading-8 relative">
                            <span>
                                <p className="font-bold">12</p>
                                <p className="min-lg:text-xl text-sm">Clients in Countries</p>
                            </span>
                        </div>
                    </div>
                    <p className="absolute bottom-10 left-7 text-xl">A collective of designers & developers <br /> shaping the digital future.</p>
                </div>
            </div>
            <div className="w-full py-2 relative px-5 items-center after:absolute after:w-[97%] after:h-px after:bg-black/40 after:origin-center after:left-1/2 after:-translate-x-1/2 after:top-0">
                <span className="text-black text-4xl uppercase">
                    <span className={`flex flex-row gap-2 ${satoshiReg.className}`}>
                        <p className={`${satoshiReg.className}`}>our</p>
                        <motion.div style={{x: worksX}} className="flex flex-row">
                            <p>works</p>
                            <VscArrowDown />
                        </motion.div>
                    </span>
                    <p className="text-2xl">2025</p>
                </span>
            </div>
        </section>
    )
}
