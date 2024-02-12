import React, { useContext, useState } from "react";
import { SmoothScrollContext } from "@/context/smoothScroll";
import { motion } from "framer-motion";
import Link from "next/link";

function getTimeString(): string {
  const date = new Date();
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const meridian = hours >= 12 ? "PM" : "AM";
  const gmtOffset = (date.getTimezoneOffset() / 60) * -1;
  const formattedTime = `${hours}:${minutes} ${meridian} GMT+${gmtOffset}`;

  return formattedTime;
}
function contact() {
  const { scroll } = useContext(SmoothScrollContext);
  const [isHovered, setHovered] = useState(false);

  const currentTime = getTimeString();

  return (
    <section
      id="contact"
      className="h-screen w-screen flex flex-col items-center justify-between"
    >
      <div className="flex flex-col gap-0">
        <h1
          className="text-[5dvw] font-extrabold m-0"
          onMouseEnter={() => setHovered(false)}
          onMouseLeave={() => setHovered(true)}
        >
          GET IN TOUCH
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-2 bg-primary"
        ></motion.div>
      </div>
      <div>Im to lazy, just dm me</div>
      <div className="h-32 bg-[#DCE8E9] dark:bg-[#152223] w-full flex justify-between px-9 items-center">
        <div className="font-bold text-5xl">
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

export default contact;
