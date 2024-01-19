import React, { useRef, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SmoothScrollContext } from "@/context/smoothScroll";

function Projects() {
  const { scroll } = useContext(SmoothScrollContext);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0.5%", "-95%"]);
  return (
    <section
      id="projects"
      data-scroll
      data-scroll-speed="0"
      className="mx-3 rounded-xl relative"
    >
      <h1 className="text-text text-6xl px-5">Projects</h1>
      <div ref={targetRef} className="h-[300dvh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ x }}
            transition={{ duration: 0.5 }}
            className="flex gap-4"
          >
            <div className="h-[85dvh] w-[75dvh] bg-accent"></div>
            <div className="h-[85dvh] w-[75dvh] bg-accent"></div>
            <div className="h-[85dvh] w-[75dvh] bg-accent"></div>
            <div className="h-[85dvh] w-[75dvh] bg-accent"></div>
            <div className="h-[85dvh] w-[75dvh] bg-accent"></div>
            <div className="h-[85dvh] w-[75dvh] bg-accent"></div>
            <div className="h-[85dvh] w-[75dvh] bg-accent"></div>
            <div className="h-[85dvh] w-[75dvh] bg-accent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
