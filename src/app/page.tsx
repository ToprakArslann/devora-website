import Lenis from "@/app/components/lenis";
import Hero from "./components/hero";
import About from "./components/about";
import Cases from "./components/cases";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";


export default function Home() {
  return (
      <Lenis>
        <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-hidden relative bg-black">
          <Hero />
          <About/>
          <Cases/>
          <Testimonial/>
          <Contact/>
        </div>
      </Lenis>
  );
}
