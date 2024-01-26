import React from "react";
import Project from "./project";

function Project_list() {
  return (
    <>
      <Project
        imgs={["/ChatAppv2/1.png", "/ChatAppv2/2.png", "/ChatAppv2/3.png"]}
        title="Project 1"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quibusdam, voluptatibus quia voluptas, voluptates, voluptate
              quod quas quos doloribus fugit voluptatum. Quisquam quibusdam,
              voluptatibus quia voluptas, voluptates, voluptate quod quas quos
              doloribus fugit voluptatum."
      />
      <Project
        imgs={["/FitnessApp/1.png", "/FitnessApp/2.png", "/FitnessApp/3.png"]}
        title="Project 2"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quibusdam, voluptatibus quia voluptas, voluptates, voluptate
              quod quas quos doloribus fugit voluptatum. Quisquam quibusdam,
              voluptatibus quia voluptas, voluptates, voluptate quod quas quos
              doloribus fugit voluptatum."
      />
      <Project
        imgs={["/BankingApp/1.png", "/BankingApp/2.png", "/BankingApp/3.png"]}
        title="Project 3"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quibusdam, voluptatibus quia voluptas, voluptates, voluptate
              quod quas quos doloribus fugit voluptatum. Quisquam quibusdam,
              voluptatibus quia voluptas, voluptates, voluptate quod quas quos
              doloribus fugit voluptatum."
      />
    </>
  );
}

export default Project_list;
