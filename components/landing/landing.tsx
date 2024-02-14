"use client";
import React, { useRef, useEffect } from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { PiReadCvLogoLight } from "react-icons/pi";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { FaGitSquare } from "react-icons/fa";
import { useWindowSize } from "@uidotdev/usehooks";

function Landing() {
  const { width } = useWindowSize();
  const [scope, animate] = useAnimate();
  const marqueeVariants = {
    animate: {
      x: ["105%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

  const marqueeVariants2 = {
    animate: {
      x: ["-120%", "105%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 6,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section
      id="home"
      data-scroll
      data-scroll-speed="-0.5"
      className="flex h-dvh bg-background relative"
    >
      <div className="md:flex h-full w-1/12  flex-col items-center justify-end text-2xl space-y-6 pb-8 hidden text-text">
        <a>
          <PiReadCvLogoLight />
        </a>

        <a href="https://twitter.com/Kevin_Samson_" target="_blank">
          <RiTwitterXFill />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <GrInstagram />
        </a>
        <a href="https://www.linkedin.com/in/kevin-samson--/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/kevin-samson" target="_blank">
          <FaGitSquare />
        </a>
      </div>
      <div className="w-screen h-screen relative">
        <div className="absolute text-[15dvh] whitespace-nowrap bottom-72">
          {width && width > 1000 ? (
            <>
              <motion.p
                ref={scope}
                animate="animate"
                className="relative"
                variants={marqueeVariants}
              >
                Hi, I am <span className="text-primary">Kevin Samson</span>
              </motion.p>
              <motion.p
                animate="animate"
                className="text-[10dvh]"
                variants={marqueeVariants2}
              >
                {" "}
                Devloper and a Computer Eutusiast
              </motion.p>
            </>
          ) : (
            ""
          )}
        </div>
        {width && width < 1000 ? (
          <div className="mt-24 w-screen overflow-x-hidden whitespace-nowrap">
            <motion.p
              ref={scope}
              animate="animate"
              className="relative text-[10dvh]"
              variants={marqueeVariants}
            >
              Hi, I am <span className="text-primary">Kevin Samson</span>
            </motion.p>
            <motion.p
              animate="animate"
              className="text-[10dvh]"
              variants={marqueeVariants2}
            >
              {" "}
              Devloper and a Computer Eutusiast
            </motion.p>
          </div>
        ) : (
          ""
        )}
        <div className="w-screen absolute bottom-0 flex justify-center md:left-52">
          <Image
            src="/hom.png"
            alt="This is a picture of kevin"
            width="700"
            height={700}
            className=" z-50 "
          />
        </div>
      </div>
      <div className="hidden md:flex h-full w-1/12  flex-col items-center justify-end pb-8">
        <h6 className="rotate-90">scroll &rarr;</h6>
      </div>
    </section>
  );
}

export default Landing;
