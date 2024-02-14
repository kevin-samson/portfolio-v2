import React, { useRef, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SmoothScrollContext } from "@/context/smoothScroll";
import { useSpring } from "framer-motion";
import Project_list from "./project_list";
import Title from "@/components/reuse/title";

function Projects_pc() {
  const { scroll } = useContext(SmoothScrollContext);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "end center"],
  });

  const springTransfrom = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  const x = useTransform(springTransfrom, [0, 1], ["70%", "-95%"]);

  return (
    <section
      id="projects"
      data-scroll
      data-scroll-speed="0"
      className="mx-3 rounded-xl md:flex md:flex-col md:items-center md:mt-48"
    >
      <Title title="MY CREATIONS" />
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
