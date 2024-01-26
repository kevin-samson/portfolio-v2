import React, {
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { motion, useMotionValue } from "framer-motion";
import { SmoothScrollContext } from "@/context/smoothScroll";
import Image from "next/image";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

function Project({
  title,
  description,
  imgs,
}: {
  title: string;
  description: string;
  imgs: string[];
}) {
  const { scroll } = useContext(SmoothScrollContext);
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div
      data-scroll
      data-scroll-speed="0"
      id={title}
      className="h-[90dvh] md:h-[85dvh] w-[85dvw] md:w-[40dvw] dark:bg-[#132229] bg-[#D6E5EC] relative text-text rounded-3xl flex flex-col  p-7 "
    >
      <div className="absolute -bottom-5 -right-2 text-6xl font-extralight text-text">
        {title}
      </div>
      <div className="relative h-full w-full overflow-hidden bg-neutral-950 py-8">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="h-full w-full flex cursor-grab items-center active:cursor-grabbing"
        >
          <Images imgIndex={imgIndex} imgs={imgs} />
        </motion.div>

        <Dots imgs={imgs} imgIndex={imgIndex} setImgIndex={setImgIndex} />
        <GradientEdges />
      </div>
      <p>{description}</p>
    </div>
  );
}

const Images = ({ imgIndex, imgs }: { imgIndex: number; imgs: string[] }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="h-full w-full shrink-0 rounded-xl bg-cover bg-no-repeat bg-center"
          />
        );
      })}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
  imgs,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
  imgs: string[];
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-primary" : "bg-secondary"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};

export default Project;
