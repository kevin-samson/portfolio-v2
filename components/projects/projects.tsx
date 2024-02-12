import React from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Projects_mob from "./projects_mob";
import Projects_pc from "./projects_pc";

function Projects() {
  const { width } = useWindowSize();
  return <>{width && width < 768 ? <Projects_mob /> : <Projects_pc />}</>;
}

export default Projects;
