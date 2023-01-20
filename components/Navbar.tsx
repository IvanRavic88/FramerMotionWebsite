"use client";
import { motion } from "framer-motion";
import styles from "../src/styles/index";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} relative py-8`}
    >
      <div className="gradient-01 absolute inset-0 w-[50%]" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="h-[24px] w-[24px] object-contain"
        />
        <h2 className="leading-30px text-[24px] font-extrabold text-white">
          METAVERSUS
        </h2>
        <img
          src="/menu.svg"
          alt="menu"
          className="h-[24px] w-[24px] object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
