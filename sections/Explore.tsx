"use client";

import { useState } from "react";
import styles from "../src/styles";
import { TitleText, TypingText } from "../components";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";

const Explore = () => {
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Chose the world you want <br className="hidden md:block" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
    </section>
  );
};

export default Explore;
