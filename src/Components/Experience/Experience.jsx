import React from "react";
import {
  FaCss3,
  FaNodeJs,
  FaHtml5,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiCplusplus, SiMysql, SiSpring } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-2xl md:text-4xl text-white font-bold"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-around"
      >
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <motion.span
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaHtml5 color="#E34F26" size={50} />
          </motion.span>
          <motion.span
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaCss3 color="#1572B6" size={50} />
          </motion.span>
          <motion.span
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaReact color="#61DAFB" size={50} />
          </motion.span>
          <motion.span
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaNodeJs color="#689F38" size={50} />
          </motion.span>
          <motion.span
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaJs color="#F7DF1E" size={50} />
          </motion.span>
          <motion.span
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <SiMongodb color="#47A248" size={50} />
          </motion.span>
          <motion.span
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaJava color="red" size={50} />
          </motion.span>
          <motion.span
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaPython color="yellow" size={50} />
          </motion.span>
          <motion.span
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <SiCplusplus color="#00599C" size={50} />
          </motion.span>
          <motion.span
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <SiMysql color="#00758F" size={50} />
          </motion.span>
          <motion.span
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <SiSpring color="#6DB33F" size={50} />
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
