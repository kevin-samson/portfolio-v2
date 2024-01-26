import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import image from "@/public/hom.png";

function Landing() {
  return (
    <section
      id="home"
      data-scroll
      data-scroll-speed="-0.5"
      className="flex h-dvh bg-background relative"
    >
      <div className="md:flex h-full w-1/12  flex-col items-center justify-end text-2xl space-y-6 pb-8 hidden text-text">
        <RiTwitterXFill />
        <GrInstagram />
        <FaLinkedin />
      </div>
      <div className="w-full h-full flex items-end justify-center"></div>
      <div className="hidden md:flex h-full w-1/12  flex-col items-center justify-end pb-8">
        <h6 className="rotate-90">scroll &rarr;</h6>
      </div>
    </section>
  );
}

export default Landing;
