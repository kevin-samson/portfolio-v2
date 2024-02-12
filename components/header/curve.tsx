import React from "react";
import { motion } from "framer-motion";

function Curve() {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;

  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  return (
    <svg className="absolute h-full w-[100px]  top-0 -left-[99px] fill-accent">
      <motion.path
        initial={{ d: initialPath }}
        animate={{ d: targetPath }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        exit={{
          d: initialPath,
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        }}
      ></motion.path>
    </svg>
  );
}

export default Curve;
