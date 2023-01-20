"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../src/styles/index";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row items-center justify-center"
          >
            <h1 className={styles.heroHeading}>Ma</h1>
            <div className={styles.heroDText} />
            <h1 className={styles.heroHeading}>Ness</h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
