import React from "react";
import mineImg from "../Home/HomeMine.png";
import TextChange from "../../TextChange";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Home = () => {
  return (
    <div className="text-white flex w-full justify-center items-center min-h-screen p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <motion.h1
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="pb-16 text-6xl font-thin tracking-tight  lg:mt-16 lg:text-8xl"
        >
          {/*<TextChange /> // for name animation*/}
          Devanshu Deshav
        </motion.h1>

        <motion.p
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="my-2 max-w-xl py-6 "
        >
          I am an enthusiastic computer science graduate with interest in full
          stack development. With a solid foundation in front-end technologies
          like Reactjs and back-end technologies such as Node.js, Express and
          databases, I am eager to apply my skills to real-world projects.
          Additionally, I have a keen interest in spring boot and machine
          learning. My goal is to combine my technical expertise and passion for
          innovation to contribute to cutting-edge projects and help drive
          technological advancements.
        </motion.p>
      </div>

      {/* 
        <motion.img
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="w-1/2"
        src={mineImg}
        alt=""
      />
      */}
    </div>
  );
};

export default Home;
