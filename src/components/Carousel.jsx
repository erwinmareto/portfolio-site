import first from "../assets/projects/wihire/first_pic.png";
import sec from "../assets/projects/wihire/sec_pic.png";
import third from "../assets/projects/wihire/third_pic.png";
import fourth from "../assets/projects/wihire/four_pic.png";
import "./styles.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [first, sec, third, fourth];
  const checkIndex = (number) => {
    if (number === images.length || number < 0) {
      return 0;
    }
    if (number < images.length) {
      console.log(index);

      return number;
    }
    return number - images.length;
  };

  const starter = {
    move: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };
  const moveOne = {
    move: {
      x: -10,
      y: -10,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className=" flex justify-center"
      variants={starter}
      animate="move"
      onClick={() => setIndex((index) => checkIndex((index += 1)))}
    >
      <AnimatePresence>
        {index === 0 && (
          <motion.img
            src={first}
            width={500}
            className="project-img"
            variants={moveOne}
            initial={{ opacity: 0, x: 100 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            exit={{ x: -200, opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {index === 1 && (
          <motion.img
            src={sec}
            width={500}
            className="project-img"
            variants={moveOne}
            initial={{ opacity: 0, x: 100 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            exit={{ x: -200, opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {index === 2 && (
          <motion.img
            src={third}
            width={500}
            className="project-img"
            variants={moveOne}
            initial={{ opacity: 0, x: 100 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            exit={{ x: -200, opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {index === 3 && (
          <motion.img
            src={fourth}
            width={500}
            className="project-img"
            variants={moveOne}
            initial={{ opacity: 0, x: 100 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            exit={{ x: -200, opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Carousel;
