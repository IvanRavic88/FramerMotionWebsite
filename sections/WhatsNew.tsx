"use client";

import { motion } from "framer-motion";
import styles from "../src/styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { NewFeatures, TitleText, TypingText } from "../components";
import { newFeatures } from "../constants";
import Image from "next/image";

const WhatsNew: React.FC = () => {
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
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex flex-[0.75] flex-col justify-center"
        >
          <TypingText title="| What's new?" textStyles="" />
          <TitleText
            title={<>What&#39;s new about Metaversus?</>}
            textStyles=""
          />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src="/whats-new.png"
            alt="whats-new"
            fill
            className="h-[90%] w-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
