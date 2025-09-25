import Image from "next/image";
import { clash, clashLight } from "./layout";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-full flex flex-col justify-between px-30 pt-45 pb-30 z-10">
        <div className=" flex flex-row w-full justify-between">
          <div className="text-5xl">
          Creative digital solutions <br/> for your brand
          </div>
          <div className={`text-xl ${clashLight.className} flex flex-col`}>
            Remote-first team delivering stunning <br /> design and scalable technology.
            <Image width={70} height={0} src="arrows.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-row w-full justify-between">
          <Image src="shape1.svg" width={170} height={0} alt="" />
          <div className="flex items-center">
            <button className={`bg-white/5 py-2 px-4 backdrop-blur-sm brightness-101 rounded-full border-1 border-white/20 text-2xl ${clashLight.className}`}>View Our Work</button>
          </div>
        </div>
      </div>
      <video src="main.mp4" loop autoPlay muted className="flex absolute z-5 w-full h-screen object-cover"></video>
    </div>
  );
}
