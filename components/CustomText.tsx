"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

interface CustomTextProps {
  title: string;
  textStyles: string;
}

export const TypingText: React.FC<CustomTextProps> = (props) => (
  <motion.p
    variants={textContainer}
    className={`t text-secondary-white text-[14px] font-normal ${props.textStyles}`}
  >
    {Array.from(props.title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
export const TitleText: React.FC<CustomTextProps> = (props) => (
  <h2>TypingText</h2>
);
