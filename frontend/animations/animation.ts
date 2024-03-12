import { MotionProps } from "framer-motion";

export const anim = (variants: MotionProps) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants: variants,
  };
};

export const mobileNavMenuVariants = {
  initial: {
    x: "-100%",
  },
  enter: {
    x: 0,
  },
  exit: {
    x: "-100%",
  },
};
