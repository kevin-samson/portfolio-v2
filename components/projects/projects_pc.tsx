import React, { useRef, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SmoothScrollContext } from "@/context/smoothScroll";
import { useSpring } from "framer-motion";
import Project_list from "./project_list";

function Projects_pc() {
  const { scroll } = useContext(SmoothScrollContext);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.6", "end center"],
  });

  const springTransfrom = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  const x = useTransform(springTransfrom, [0, 1], ["50%", "-95%"]);

  return (
    <section
      id="projects"
      data-scroll
      data-scroll-speed="0"
      className="mx-3 rounded-xl relative"
    >
      <h1 className="text-text text-6xl px-5 mt-7">My Creations &darr;</h1>
      <div ref={targetRef} className="h-[250dvh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ x }}
            transition={{ duration: 0.5 }}
            className="flex gap-48"
          >
            <Project_list />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects_pc;
