import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Title from "@/components/reuse/title";

function Contact() {
  const [isHovered, setHovered] = useState(false);
  function getTimeString(): string {
    const date = new Date();
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const meridian = hours >= 12 ? "PM" : "AM";
    const gmtOffset = (date.getTimezoneOffset() / 60) * -1;
    const formattedTime = `${hours}:${minutes} ${meridian} GMT+${gmtOffset}`;

    return formattedTime;
  }

  const currentTime = getTimeString();

  return (
    <section
      id="contact"
      className="h-screen w-screen flex flex-col items-center justify-between mt-16"
    >
      <Title title="GET IN TOUCH" />
      <div>Im to lazy, just dm me</div>
      <div className="h-32 bg-[#DCE8E9] dark:bg-[#152223] w-full flex justify-between px-9 items-center">
        <div className="font-bold text-3xl">
          <p>© 2024</p>
          <p>Kevin Samson</p>
        </div>
        <div className="text-xl">
          <p className="font-semibold">Local Time</p>
          <p>{currentTime}</p>
        </div>
        <Link
          href="/"
          className=" text-white bg-accent hover:bg-primary transition-colors duration-150 ease-linear  h-14 w-14 rounded-full flex flex-col justify-center items-center group gap-2"
        >
          <p className="text-xl">&uarr;</p>
        </Link>
      </div>
    </section>
  );
}

export default Contact;
