import Image from "next/image";
import { clash, clashLight, satoshi, satoshiBlack, satoshiReg } from "./layout";
import { VscArrowDown } from "react-icons/vsc";
import { BsArrowUpRight } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
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
          <div className="flex flex-col py-10 px-7 text-[2.5vw]/12 w-full relative">
            <span className={`flex h-fit w-full pb-7 relative after:absolute after:w-full after:h-px after:bg-black/40 after:origin-center after:left-1/2 after:-translate-x-1/2 after:bottom-0 ${clash.className}`}>
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
            <span className="flex flex-row gap-2">
              <p className={`${satoshiReg.className}`}>our works</p>
              <VscArrowDown/>
            </span>
            <p className="text-2xl">2025</p>
          </span>
        </div>
      </div>
      <div className="w-full h-screen flex bg-white items-center justify-center text-black relative">
        <p className={`absolute top-15 text-3xl`}>We craft digital products that inspire, engage, and deliver results.</p>
        <div className="w-full grid grid-cols-4 grid-rows-2 gap-5 m-auto items-center z-2">
          <div className="flex flex-col items-center">
            <div className="flex w-[300px] h-[370px] flex-col">
              <div className="flex w-full h-[350px] overflow-hidden">
                <img alt="" src="project1.png" className="object-cover"/>
              </div>
              <div className="flex flex-row justify-between items-center">
                <p className="text-xl">NexaPay</p>
                <BsArrowUpRight/>
              </div>
            </div>
          </div>
          <div></div>
          <div className="flex flex-col items-center">
            <div className="flex w-[300px] h-[370px] flex-col">
              <div className="flex w-full h-[350px] overflow-hidden">
                <img alt="" src="project3.png" className="object-cover"/>
              </div>
              <div className="flex flex-row justify-between items-center">
                <p className="text-xl">Floria</p>
                <BsArrowUpRight/>
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
                <img alt="" src="project2.png" className="object-cover"/>
              </div>
              <div className="flex flex-row justify-between items-center">
                <p className="text-xl">Loomio</p>
                <BsArrowUpRight/>
              </div>
            </div>
          </div>
          <div></div>
          <div className="flex flex-col items-center">
            <div className="flex w-[300px] h-[370px] flex-col">
              <div className="flex w-full h-[350px] overflow-hidden">
                <img alt="" src="project4.png" className="object-cover"/>
              </div>
              <div className="flex flex-row justify-between items-center">
                <p className="text-xl">CineWave</p>
                <BsArrowUpRight/>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 px-5 mb-10 flex flex-col w-full leading-65 z-1 text-black/40 font-black">
          <h2 className="uppercase text-[15vw]">DEVORA</h2>
          <h2 className="uppercase text-[15vw] text-end">Systems</h2>
        </div>
      </div>
      <div className={`flex flex-col w-full h-screen relative ${satoshi.className}`}>
        <Image width={180} height={0} alt="" className="absolute top-10 right-10" src="shape2.svg"/>
        <Image width={85} height={0} className="absolute top-10 left-10" alt="" src="quotes.svg"/>
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
                    <img alt="" src="avatar2.png" className="object-cover"/>
                  </div>
                  <div className="flex flex-row gap-1">
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                  </div>
                </div>
                <BsArrowUpRight size={25} className="text-white/40"/>
              </div>
              <div className="text-4xl text-white py-10 h-full w-full flex">"World-class design and execution. Truly exceeded expectations."</div>
              <div className="text-2xl text-white w-full flex"> — Michael B., CEO @ Floria</div>
            </div>
            <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
              <div className="flex flex-row w-full justify-between items-center">
                <div className=" flex flex-row rounded-full items-center gap-2">
                  <div className="w-12 aspect-square rounded-full overflow-hidden">
                    <img alt="" src="avatar1.png" className="object-cover"/>
                  </div>
                  <div className="flex flex-row gap-1">
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                  </div>
                </div>
                <BsArrowUpRight size={25} className="text-white/40"/>
              </div>
              <div className="text-4xl text-white py-10 h-full w-full flex">“From concept to launch, the team felt like an extension of our own. Beautiful design, flawless execution.”</div>
              <div className="text-2xl text-white w-full flex"> — Sofia M., Creative Director @ CineWave</div>
            </div>
            <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
              <div className="flex flex-row w-full justify-between items-center">
                <div className=" flex flex-row rounded-full items-center gap-2">
                  <div className="w-12 aspect-square rounded-full overflow-hidden">
                    <img alt="" src="avatar3.png" className="object-cover"/>
                  </div>
                  <div className="flex flex-row gap-1">
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                  </div>
                </div>
                <BsArrowUpRight size={25} className="text-white/40"/>
              </div>
              <div className="text-4xl text-white py-10 h-full w-full flex">“Working with Devora was like unlocking a cheat code. They transformed our idea into a live product in record time.”</div>
              <div className="text-2xl text-white w-full flex">— Daniel K., CEO @ Loomio</div>
            </div>
            <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
              <div className="flex flex-row w-full justify-between items-center">
                <div className=" flex flex-row rounded-full items-center gap-2">
                  <div className="w-12 aspect-square rounded-full overflow-hidden">
                    <img alt="" src="avatar4.png" className="object-cover"/>
                  </div>
                  <div className="flex flex-row gap-1">
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                  </div>
                </div>
                <BsArrowUpRight size={25} className="text-white/40"/>
              </div>
              <div className="text-4xl text-white py-10 h-full w-full flex">“They don’t just build products, they craft digital experiences. Truly world-class.”</div>
              <div className="text-2xl text-white w-full flex">— John R., Product Manager @ NexaPay</div>
            </div>
            <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
              <div className="flex flex-row w-full justify-between items-center">
                <div className=" flex flex-row rounded-full items-center gap-2">
                  <div className="w-12 aspect-square rounded-full overflow-hidden">
                    <img alt="" src="avatar2.png" className="object-cover"/>
                  </div>
                  <div className="flex flex-row gap-1">
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                  </div>
                </div>
                <BsArrowUpRight size={25} className="text-white/40"/>
              </div>
              <div className="text-4xl text-white py-10 h-full w-full flex">"World-class design and execution. Truly exceeded expectations."</div>
              <div className="text-2xl text-white w-full flex"> — Michael B., CEO @ Floria</div>
            </div>
            <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
              <div className="flex flex-row w-full justify-between items-center">
                <div className=" flex flex-row rounded-full items-center gap-2">
                  <div className="w-12 aspect-square rounded-full overflow-hidden">
                    <img alt="" src="avatar1.png" className="object-cover"/>
                  </div>
                  <div className="flex flex-row gap-1">
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                  </div>
                </div>
                <BsArrowUpRight size={25} className="text-white/40"/>
              </div>
              <div className="text-4xl text-white py-10 h-full w-full flex">“From concept to launch, the team felt like an extension of our own. Beautiful design, flawless execution.”</div>
              <div className="text-2xl text-white w-full flex"> — Sofia M., Creative Director @ CineWave</div>
            </div>
            <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
              <div className="flex flex-row w-full justify-between items-center">
                <div className=" flex flex-row rounded-full items-center gap-2">
                  <div className="w-12 aspect-square rounded-full overflow-hidden">
                    <img alt="" src="avatar3.png" className="object-cover"/>
                  </div>
                  <div className="flex flex-row gap-1">
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                  </div>
                </div>
                <BsArrowUpRight size={25} className="text-white/40"/>
              </div>
              <div className="text-4xl text-white py-10 h-full w-full flex">“Working with Devora was like unlocking a cheat code. They transformed our idea into a live product in record time.”</div>
              <div className="text-2xl text-white w-full flex">— Daniel K., CEO @ Loomio</div>
            </div>
            <div className="flex flex-col text-black w-120 max-h-[600px] min-h-[500px] items-center px-5 py-5 border-x-1 border-[#666666]/60 border-b-1">
              <div className="flex flex-row w-full justify-between items-center">
                <div className=" flex flex-row rounded-full items-center gap-2">
                  <div className="w-12 aspect-square rounded-full overflow-hidden">
                    <img alt="" src="avatar4.png" className="object-cover"/>
                  </div>
                  <div className="flex flex-row gap-1">
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                    <IoMdStar size={25} className="text-orange-300"/>
                  </div>
                </div>
                <BsArrowUpRight size={25} className="text-white/40"/>
              </div>
              <div className="text-4xl text-white py-10 h-full w-full flex">“They don’t just build products, they craft digital experiences. Truly world-class.”</div>
              <div className="text-2xl text-white w-full flex">— John R., Product Manager @ NexaPay</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-screen p-10">
        <div className="flex w-full h-full flex-col relative items-center justify-center">
          <h2 className={`uppercase z-2 text-[11vw] pt-5 mix-blend-overlay ${satoshiBlack.className}`}>get in touch</h2>
          <div className="flex w-full h-full px-37 z-2 items-center justify-center pb-20">
            <form action="" className="flex w-full h-full flex-col items-center gap-10 ">
              <input type="text" className="border-b-2 w-full text-black placeholder:text-black text-2xl pl-2 focus:outline-none active:outline-none " placeholder="Full Name" required/>
              <div className="w-full flex flex-row items-center justify-center gap-5">
                <input type="text" className="border-b-2 w-full text-black placeholder:text-black text-2xl pl-2 focus:outline-none active:outline-none " placeholder="Email" required/>
                <input type="text" className="border-b-2 w-full text-black placeholder:text-black text-2xl pl-2 focus:outline-none active:outline-none " placeholder="Phone" required/>
              </div>
              <textarea name="Message" placeholder="Message" className="w-full border-b-2 text-2xl pl-2 h-full text-black placeholder:text-black focus:outline-none active:outline-none" id="" required></textarea>
              <button type="submit" className="bg-black w-fit py-1 px-6 text-3xl hover:bg-white hover:text-black hover:underline">Submit</button>
            </form>
          </div>
          <div className="flex w-full h-full absolute inset-0 overflow-hidden z-1">
            <img src="texture2.png" className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
