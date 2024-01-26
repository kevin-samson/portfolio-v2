import React, { useRef, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SmoothScrollContext } from "@/context/smoothScroll";

function About() {
  const { scroll } = useContext(SmoothScrollContext);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "start end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20px", "0px"]);

  return (
    <motion.section
      style={{ marginRight: y, marginLeft: y }}
      id="about"
      data-scroll
      data-scroll-speed="0"
      className="h-[85dvh] bg-text rounded-xl relative"
    >
      <div className="flex flex-col p-5">
        <h1 ref={targetRef} className="text-background text-5xl md:text-6xl ">
          About Me &darr;
        </h1>
      </div>
    </motion.section>
  );
}

export default About;
