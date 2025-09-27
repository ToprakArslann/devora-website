import Image from "next/image";
import { clash, clashLight, satoshi, satoshiReg } from "./layout";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="w-full h-screen flex flex-col justify-between px-30 pt-45 pb-30 z-10">
        <div className=" flex flex-row w-full justify-between">
          <div className="flex flex-col text-5xl gap-5">
          Creative digital solutions <br/> for your brand
          <div className="flex flex-row relative">
            <div className="w-12 rounded-full aspect-square overflow-hidden border-2 border-[#1E1E1E] absolute">
              <img  alt="" src="avatar1.png"/>
            </div>
            <div className="w-12 rounded-full aspect-square overflow-hidden border-2 border-[#1E1E1E] absolute left-8">
              <img  alt="" src="avatar2.png"/>
            </div>
            <div className="w-12 rounded-full aspect-square overflow-hidden border-2 border-[#1E1E1E] absolute left-16">
              <img  alt="" src="avatar3.png"/>
            </div>
            <div className="w-12 rounded-full aspect-square overflow-hidden border-2 border-[#1E1E1E] absolute left-24">
              <img  alt="" src="avatar4.png"/>
            </div>
          </div>
          </div>
          <div className={`text-xl ${clashLight.className} flex flex-col relative`}>
            Remote-first team delivering stunning <br /> design and scalable technology.
            <Image width={70} height={0} src="arrows.svg" alt="" />
            <Image width={150} height={0} src="star.svg" className="absolute right-0 top-40" alt=""/>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between">
          <Image src="shape1.svg" width={170} height={0} alt="" />
          <div className="flex items-center px-35">
            <a href="" className={`text-3xl ${satoshi.className} bg-white text-black py-1 px-2`}>View Our Work</a>
          </div>
        </div>
        <video src="main2.mp4" loop autoPlay muted className="flex absolute -z-5 inset-0 w-full h-screen object-cover"></video>
      </div>
      <div className="w-full h-screen flex flex-col bg-white">
        <div className="flex flex-row w-full h-full ">
          <div className="flex w-1/4 h-full relative">
            <div className="absolute h-[92%] w-px right-0 bg-black/40 origin-center top-1/2 -translate-y-1/2"></div>
            awdawd
          </div>
        </div>
        <div className="w-full py-2 relative px-5 items-center">
          <div className="absolute h-px w-[92%] top-0 bg-black/40 origin-center left-1/2 -translate-x-1/2"></div>
          <span className="text-black text-3xl uppercase">
            <p className={`${satoshiReg.className}`}>our works</p>
            <p className="text-xl">2025</p>
          </span>
        </div>
      </div>
    </div>
  );
}
