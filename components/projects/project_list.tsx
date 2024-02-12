import React from "react";
import Project from "./project";

function Project_list() {
  return (
    <>
      <Project
        imgs={["/ChatAppv2/1.png", "/ChatAppv2/2.png", "/ChatAppv2/3.png"]}
        techUsed={["Next,js", "Tailwind", "Pusher", "MongoDB"]}
        title="Project 1"
        link = "https://github.com/kevin-samson/chat-app-with-mongodb"
        liveLink="https://with-mongodb-app-pi.vercel.app"
        description="A chat app similar to that of whatsapp web. Users are able to connect to each other via their email id. Pusher is used to send and receive messages in real time."
        
      />
      <Project
        techUsed={["Flask", "Jinja Templating", "Tailwind", "MySQL"]}
        imgs={["/FitnessApp/1.png", "/FitnessApp/2.png", "/FitnessApp/3.png"]}
        title="Project 2"
        link = ""
        description="A group project made for year 2 DBMS project. It is a fitness app that users to track their stats such as weight, height, BMI, etc. "
      />
      <Project
        techUsed={["Java", "Swing", "AWT"]}
        imgs={["/BankingApp/1.png", "/BankingApp/2.png", "/BankingApp/3.png"]}
        title="Project 3"
        link = "w"
        description="Made for year 2 OOPS Project. It is a simple banking app that allows users to create an account, deposit and withdraw money, and check their balance."
      />
    </>
  );
}

export default Project_list;
