"use client";
import styles from "../src/styles";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { StartSteps, TitleText, TypingText } from "../components";
import { startingFeatures } from "../constants";
import Image from "next/image";

const GetStarted: React.FC = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src="/get-started.png"
            alt="get-started"
            fill
            className="h-[90%] w-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex flex-[0.75] flex-col justify-center"
        >
          <TypingText title="| How Metaversus Works" textStyles="" />
          <TitleText
            title={<>Get started with just a few clicks</>}
            textStyles=""
          />
          <div className="mt-[31px] flex max-w-[370px] flex-col gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
