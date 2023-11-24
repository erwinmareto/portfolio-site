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
  const classes = [
    "stopper",
    "carousel-img-1",
    "carousel-img-2",
    "carousel-img-3",
  ];
  const checkIndex = (number: number) => {
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
    },
    hidden: {opacity: 0},
    visible: {opacity: 1}
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
  const moveTwo = {
    move: {
      x: -20,
      y: -20,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };
  const moveThree = {
    move: {
      x: -30,
      y: -30,
      opacity: 1,
      transition: {
        type: 'easeIn'
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
      <motion.img src={images[index]} className="static carousel-img-1 flex lg:hidden" />
      <AnimatePresence>
        { index <= 0 && (
          <motion.img
            src={first}
            width={500}
            className={`${classes[index]} hidden lg:flex`}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{ x: -300, opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(index <= 1) && (
          <motion.img
            src={sec}
            width={500}
            className={`${classes.at(index - 1)} hidden lg:flex ${index === 0 && 'relative right-0'}`}
            variants={moveOne}
            initial={{opacity: 0}}
            exit={{ x: -300, opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
      { (index <= 2) && <motion.img
        src={third}
        width={500}
        className={`${classes.at(index - 2)} hidden lg:flex ${index === 1 && 'relative right-0'}`}
        variants={moveTwo}
        initial={{opacity: 0}}
        exit={{ x: -300, opacity: 0 }}
      />}
      </AnimatePresence>

      <AnimatePresence>
        {(index >= 2) && 
      <motion.img
        src={fourth}
        width={500}
        className={`${classes.at(index - 3)} hidden lg:flex ${'relative right-0'}`}
        variants={moveThree}
        initial={{opacity: 0}}
        animate='move'
        exit={{ x: -300, opacity: 0}}
      />
        }
      </AnimatePresence>
    </motion.div>
  );
};

export default Carousel;
