"use client";
import { useContext, useRef } from "react";
import { SmoothScrollContext } from "@/context/smoothScroll";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scroll } = useContext(SmoothScrollContext);
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
  });

  const y = useTransform(scrollYProgress2, [0, 1], ["20px", "0px"]);

  const x = useTransform(scrollYProgress, [0, 1], ["0.5%", "-95%"]);

  return (
    <main data-scroll-section>
      {/* Home page */}
      <section
        id="home"
        data-scroll
        data-scroll-speed="-0.5"
        className="flex h-dvh bg-background relative"
      >
        <div className="md:flex h-full w-1/12  flex-col items-center justify-end text-4xl space-y-6 pb-8 hidden text-text">
          <div>t</div>
          <div>g</div>
          <div>l</div>
        </div>
        <div className="w-full"></div>
        <div className="hidden md:flex h-full w-1/12  flex-col items-center justify-end pb-8">
          <h6 className="rotate-90">scroll &rarr;</h6>
        </div>
      </section>
      <motion.section
        style={{ marginRight: y, marginLeft: y }}
        id="about"
        data-scroll
        data-scroll-speed="0"
        className="h-[85dvh] bg-background dark rounded-xl relative"
      >
        <div className="flex flex-col p-5">
          <h1 ref={targetRef2} className="text-text text-6xl dark">
            About
          </h1>
        </div>
      </motion.section>

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
    </main>
  );
}
