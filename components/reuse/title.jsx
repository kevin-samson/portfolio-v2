import React, {useState} from "react";
import { motion } from "framer-motion";

export default function Title({ title }) {
    const [isHovered, setHovered] = useState(false);
  return  <div className="flex flex-col gap-0">
  <h1
    className="text-[9dvw] md:text-[6dvw] font-extrabold m-0"
    onMouseEnter={() => setHovered(false)}
    onMouseLeave={() => setHovered(true)}
  >
    {title} &darr;
  </h1>
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: isHovered ? "0%" : "100%" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="h-2 bg-primary"
  ></motion.div>
</div>;
}