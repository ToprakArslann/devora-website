import Image from "next/image";
import { clash, clashLight, satoshi, satoshiReg } from "./layout";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-hidden">
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
      <div className="w-full h-screen flex flex-col bg-white text-black">
        <div className="flex flex-row w-full h-full ">
          <div className="flex w-1/3 h-full relative text-4xl text-black py-20 px-5 after:absolute after:h-[94%] after:w-px after:bg-black/40 after:origin-center after:top-1/2 after:-translate-y-1/2 after:right-0">
            <p className={`${satoshiReg.className}`}>Who We Are</p>
          </div>
          <div className="flex flex-col py-10 px-7 text-4xl w-full relative">
            <span className="flex h-fit w-full pb-7 relative after:absolute after:w-full after:h-px after:bg-black/40 after:origin-center after:left-1/2 after:-translate-x-1/2 after:bottom-0 ">
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
            <p className={`${satoshiReg.className}`}>our works</p>
            <p className="text-2xl">2025</p>
          </span>
        </div>
      </div>
    </div>
  );
}
