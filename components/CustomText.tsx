"use client";

import { motion } from "framer-motion";

import { textContainer, textVariant2 } from "../utils/motion";

interface customProps {
  title: string | JSX.Element;
  textStyles: string;
}

export const TypingText: React.FC<customProps> = (props) => (
  <motion.p
    variants={textContainer}
    className={`t text-[14px] font-normal text-gray-500 ${props.textStyles}`}
  >
    {typeof props.title === "string" &&
      Array.from(props.title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
  </motion.p>
);
export const TitleText: React.FC<customProps> = (props) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] text-[40px] font-bold text-white md:text-[64px] ${props.textStyles}`}
  >
    <>{props.title}</>
  </motion.h2>
);
