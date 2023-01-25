"use client";

import { motion } from "framer-motion";
import React from "react";
import styles from "../src/styles";
import { fadeIn } from "../utils/motion";

interface exploreProps {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  handleClick: React.Dispatch<React.SetStateAction<string>>;
  active: string;
}

const ExploreCard: React.FC<exploreProps> = ({
  id,
  imgUrl,
  title,
  index,
  handleClick,
  active,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "flex-[10] lg:flex-[3.5]" : "flex-[2] lg:flex-[0.5]"
      } ease-out-flex flex h-[700] min-w-[170px] cursor-pointer items-center justify-center transition-[flex] duration-[0.75s]`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute h-full w-full rounded-[24px] object-cover"
      />
      {active !== id ? (
        <h3 className="absolute z-0 text-[18px] font-semibold text-white sm:text-[26px] lg:bottom-20 lg:origin-[0,0] lg:rotate-[-90deg]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 flex w-full flex-col justify-start rounded-b-[24px] bg-[rgba(0,0,0,0.5)] p-8">
          <div
            className={`${styles.flexCenter} glassmorphism mb-[16px] h-[60px] w-[60px] rounded-[24px]`}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="h-1/2 w-1/2 object-contain"
            />
          </div>
          <p className="text-[16px] font-normal uppercase leading-[20px] text-white">
            Enter the Metaverse
          </p>
          <h2 className="mt-[24px] text-[24px] font-semibold text-white sm:text-[32px]">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
