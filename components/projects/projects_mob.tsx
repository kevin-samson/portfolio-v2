import React from "react";
import Project_list from "./project_list";
function Projects_mob() {
  return (
    <section
      id="projects"
      data-scroll
      data-scroll-speed="0"
      className="mx-3 rounded-xl flex flex-col items-center relative gap-9 mt-7"
    >
      <Project_list />
    </section>
  );
}

export default Projects_mob;
