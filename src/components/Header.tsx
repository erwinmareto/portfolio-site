import { useAnimate, motion } from "framer-motion";
import { useEffect } from "react";

import Portrait from "../assets/blob-haikei 1.png";
import "./styles.scss";

const Header = () => {
  const [scope, animate] = useAnimate();
  const [target, move] = useAnimate();

  
  useEffect(() => {
    const moveUp = async () => {
      await animate(scope.current, { opacity: 0 });
      await animate(scope.current, { opacity: 1 });
      await animate(scope.current, { y: -50 }, { delay: 3 });
      await animate(scope.current, { opacity: 0 });
    };
  
    const moveDown = async () => {
      await move(target.current, { opacity: 0 });
      await move(target.current, { opacity: 1 });
      await move(target.current, { y: 50 }, { delay: 3 });
      await move(target.current, { opacity: 0 });
    };
    moveUp();
    moveDown();
  }, [animate, scope, move, target]);

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.25,
        stiffness: 1000,
        delay: 4,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, x: -100 },
    slide: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: {
        type: "easeIn",
        duration: 2,
        stiffness: 1000,
      },
    },
  };

  return (
    <section className="hero md:pl-20 md:pr-20">
      <motion.ul
        className="py-48 text-center md:text-left"
        // variants={item}
      >
        <motion.li variants={item} initial="hidden" animate="slide">
          <h1 className="text-9xl font-bold head-text">Hello</h1>
        </motion.li>
        <h1 className="text-5xl">My Name is erwin</h1>
        <motion.li ref={target}>
          <p className="text-4xl head-text mt-5">Front End Web Developer</p>
        </motion.li>
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="show"
          className="text-5xl"
        >
          Full Stack Web Developer
        </motion.h1>
        <motion.li ref={scope}>
          <p className="text-4xl mt-5">Back End Web Developer</p>
        </motion.li>
      </motion.ul>

      <motion.img
        src={Portrait}
        className="head-img hidden md:block"
        initial={{ y: 500 }}
        animate={{ y: 1 }}
        transition={{ type: "spring", damping: 10, stiffness: 20 }}
      />
    </section>
  );
};

export default Header;
