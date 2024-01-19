import React, { useRef, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SmoothScrollContext } from "@/context/smoothScroll";

function About() {
  const { scroll } = useContext(SmoothScrollContext);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20px", "0px"]);

  return (
    <motion.section
      style={{ marginRight: y, marginLeft: y }}
      id="about"
      data-scroll
      data-scroll-speed="0"
      className="h-[85dvh] bg-background dark rounded-xl relative"
    >
      <div className="flex flex-col p-5">
        <h1 ref={targetRef} className="text-text text-6xl dark">
          About
        </h1>
      </div>
    </motion.section>
  );
}

export default About;
