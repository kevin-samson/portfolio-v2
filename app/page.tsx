"use client";
import { useContext } from "react";
import { SmoothScrollContext } from "@/context/smoothScroll";

import Landing from "@/components/landing/landing";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";

export default function Home() {
  const { scroll } = useContext(SmoothScrollContext);

  return (
    <main data-scroll-section>
      {/* Home page */}
      <Landing />
      <About />
      <Projects />
    </main>
  );
}
