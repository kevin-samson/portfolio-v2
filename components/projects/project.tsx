import React, {
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { motion, useMotionValue } from "framer-motion";
import { SmoothScrollContext } from "@/context/smoothScroll";
import { FaExternalLinkAlt } from "react-icons/fa";
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
  techUsed,
  link,
  liveLink,
}: {
  title: string;
  description: string;
  imgs: string[];
  techUsed: string[];
  link: string;
  liveLink?: string;
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
  }, [dragX, imgs.length]);

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
      className="h-[90dvh] md:h-[70dvh] w-[85dvw] md:w-[28dvw] dark:bg-[#132229] bg-[#D6E5EC] relative text-text rounded-3xl flex flex-col items-center justify-evenly gap-3 px-5 py-3"
    >
      <div className="absolute -bottom-7 -right-2 text-6xl font-extralight text-text">
        {title}
      </div>
      <div className="h-full w-full flex flex-col gap-5">
        <div className="relative h-[60%] w-full overflow-hidden pb-8 ">
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
        <TechUsed techUsed={techUsed} />
        <p>{description}</p>
      </div>
      <div className="h-16 w-full flex gap-2">
        <a
          href={link}
          target="_blank"
          className="h-full w-full bg-secondary rounded-md flex justify-center items-center gap-2"
        >
          GitHub Repo <FaExternalLinkAlt />
        </a>
        {liveLink && (
          <a
            target="_blank"
            href={liveLink}
            className="h-full w-1/2 bg-primary rounded-md flex justify-center items-center gap-2"
          >
            Live Site <FaExternalLinkAlt />
          </a>
        )}
      </div>
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

const TechUsed = ({ techUsed }: { techUsed: string[] }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {techUsed.map((name, idx) => {
        return <TechUsedButton key={idx} name={name} />;
      })}
    </div>
  );
};

const TechUsedButton = ({ name }: { name: string }) => {
  return (
    <div className="px-2 py-1 rounded-md dark:bg-[#192C38] bg-[#C7DAE6] ring-1 ring-secondary text-text">
      {name}
    </div>
  );
};

export default Project;
