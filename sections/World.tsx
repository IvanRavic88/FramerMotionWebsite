"use client";
import { motion } from "framer-motion";
import styles from "../src/styles";
import { TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";
import Image from "next/image";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the world" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friend around you an invite them to play togheter in the
              same world
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex h-[550px] w-full"
        >
          <Image
            src="/map.png"
            alt="map"
            fill
            className="w-fulll h-full object-cover"
          />
          <div className="absolute top-10 left-20 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-2">
            <Image
              src="/people-01.png"
              alt="map"
              fill
              className="w-fulll h-full object-cover"
            />
          </div>
          <div className="absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-2">
            <Image
              src="/people-02.png"
              alt="map"
              fill
              className="w-fulll h-full object-cover"
            />
          </div>
          <div className="absolute top-1/2 left-[45%] h-[70px] w-[70px] rounded-full bg-[#5d6680] p-2">
            <Image
              src="/people-03.png"
              alt="map"
              fill
              className="w-fulll h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
