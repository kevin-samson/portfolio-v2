import React from "react";
import { motion } from "framer-motion";
import Curve from "./curve";
import Link from "next/link";

function Sidenav({
  setIsActive,
}: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
      className="h-screen w-screen fixed  top-0 right-0 bg-opacity-60 backdrop-blur-sm "
    >
      <motion.div
        initial={{ x: "calc(100% + 100px)" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        exit={{
          x: "calc(100% + 100px)",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        }}
        className="h-full w-full md:w-[40dvw] bg-accent absolute right-0 flex flex-col px-7 md:px-11 py-6 justify-evenly text-background"
      >
        <Curve />
        <div className="flex flex-col gap-3">
          <span>Navigation</span>
          <div className="h-[1px] w-full bg-background"></div>
        </div>
        <div className="flex flex-col text-6xl md:text-7xl space-y-3">
          <Link
            href="/"
            onClick={() => {
              setIsActive(false);
            }}
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={() => {
              setIsActive(false);
            }}
          >
            About
          </Link>
          <Link
            href="/#projects"
            onClick={() => {
              setIsActive(false);
            }}
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            onClick={() => {
              setIsActive(false);
            }}
          >
            Contact
          </Link>
        </div>
        <div className="flex w-full justify-evenly">
          <p>Socials &rarr; </p>
          <a>Instagram</a>
          <a>Twitter</a>
          <a>LinkedIn</a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Sidenav;
