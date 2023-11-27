import { useEffect } from "react";
import { useAnimate, motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Portrait from "../assets/hero_img.png";
import "./styles.scss";

const Header = () => {
  const [scope, animate] = useAnimate();
  const [target, move] = useAnimate();

  useEffect(() => {
    const moveUp = async () => {
      await animate(scope.current, { opacity: 0 });
      await animate(scope.current, { opacity: 1 });
      await animate(scope.current, { y: -40 }, { delay: 3 });
      await animate(scope.current, { opacity: 0 });
    };

    const moveDown = async () => {
      await move(target.current, { opacity: 0 });
      await move(target.current, { opacity: 1 });
      await move(target.current, { y: 40 }, { delay: 3 });
      await move(target.current, { opacity: 0 });
    };
    moveUp();
    moveDown();
  }, [animate, scope, move, target]);

  const starter = {
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
    appear: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        opacity: 1,
      },
    },
    start: {
      transition: { staggerChildren: 0.05, staggerDirection: 1 },
    },
  };
  const items = {
    hidden: { opacity: 0, x: -110 },
    show: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: {
        type: "easeIn",
        duration: 2,
        stiffness: 1000,
      },
    },
    slide: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: {
        type: "easeIn",
        duration: 2,
        delay: 1,
        stiffness: 1000,
      },
    },
    appear: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    start: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <section className="hero md:pl-20 md:pr-20">
      <motion.ul className="py-24 text-center md:text-left md:first-letter md:py-48">
        <motion.li variants={items} initial="hidden" animate="show">
          <h1 className="text-9xl font-['righteous'] text-[#7752FE]">Hello</h1>
        </motion.li>
        <motion.h1
          className="text-4xl font-['poppins']"
          variants={items}
          initial="hidden"
          animate="slide"
        >
          I'm Erwin,
        </motion.h1>

        <motion.li ref={target}>
          <p className="text-4xl head-text font-sans">
            A Front End Web Developer
          </p>
        </motion.li>
        <motion.h1
          variants={starter}
          initial="hidden"
          animate="show"
          className="text-4xl font-['poppins']"
        >
          A Full Stack Web Developer
        </motion.h1>
        <motion.li ref={scope}>
          <p className="text-4xl font-serif">A Back End Web Developer</p>
        </motion.li>
        <motion.div
          className="flex justify-center md:w-2/4 md:justify-between"
          variants={starter}
          initial="start"
          animate="appear"
        >
          <motion.a
            className="small-contact m-5 md:m-0"
            variants={items}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/erwinmareto"
            target="_blank"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </motion.a>
          <motion.a
            className="small-contact m-5 md:m-0"
            variants={items}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/erwin-mareto-wikas-a29360233/"
            target="_blank"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </motion.a>
          <motion.a
            className="small-contact m-5 md:m-0"
            variants={items}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/erwinmareto"
            target="_blank"
          >
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </motion.a>
        </motion.div>
      </motion.ul>

      <motion.img
        src={Portrait}
        alt="Hero Picture"
        className="w-2/4 z-50 hidden lg:block"
        initial={{ y: 500 }}
        animate={{ y: 1 }}
        transition={{ type: "spring", damping: 10, stiffness: 20 }}
      />
    </section>
  );
};

export default Header;
