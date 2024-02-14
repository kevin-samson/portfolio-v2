import React from "react";
import Project_list from "./project_list";
import Title from "@/components/reuse/title";
function Projects_mob() {
  return (
    <section
      id="projects"
      data-scroll
      data-scroll-speed="0"
      className="mx-3 rounded-xl flex flex-col items-center md:relative gap-14 mt-7"
    >
      <Title title="MY CREATIONS" />

      <Project_list />
    </section>
  );
}

export default Projects_mob;
