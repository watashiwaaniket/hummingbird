import Image from "next/image";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

export default function Home() {
  return (
    <section className="flex justify-center">
      <div className="w-screen lg:w-[1400px] px-3 md:px-5">
        <Navbar />
        <Hero />
        
      </div>
    </section>
  );
}
