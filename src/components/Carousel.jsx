import homePage from "../assets/projects/wihire/home_page.png";
import jobPost from "../assets/projects/wihire/job_post.png";
import applicationPage from "../assets/projects/wihire/application.png";
import profilePage from "../assets/projects/wihire/profile.png";
import "./styles.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [homePage, jobPost, applicationPage, profilePage];
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
            src={images[index]}
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
            src={images[index]}
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
            src={images[index]}
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
            src={images[index]}
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
