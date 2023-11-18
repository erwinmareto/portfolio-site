import { useRef } from "react";
import { motion } from "framer-motion";

import Portrait from "../assets/france.webp";
import Skills from "./Skills";
import Carousel from "./Carousel";
import "./styles.scss";

const Projects = () => {
  const ref = useRef(null);

  const variants = {
    appear: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        opacity: 1,
      },
    },
    hidden: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const items = {
    appear: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <section className="projects mx-auto py-10">
      <div className="container">
        <motion.h1
          className="title title-bg text-6xl md:text-8xl"
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "inertia",
            velocity: 350,
          }}
        >
          Projects
        </motion.h1>

        <div className="flex flex-col my-10">
          <div className="grid">
            {/* <img
              src={Portrait}
              alt="portrait"
              width={500}
              height={250}
              className="project-img justify-self-center cool-border"
            /> */}
            <Carousel />
          </div>
          <article className="flex-col text-center" ref={ref}>
            <motion.p
              className="text-5xl mt-10"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "easeIn" }}
            >
              Lorem ipsum
            </motion.p>
            <motion.ul
              variants={variants}
              initial="hidden"
              whileInView="appear"
              viewport={{ once: true, amount: 0.8 }}
              className="badge-list"
            >
              <motion.li className="badge" variants={items}>
                React
              </motion.li>
              <motion.li className="badge" variants={items}>
                React
              </motion.li>
              <motion.li className="badge" variants={items}>
                React
              </motion.li>
              <motion.li className="badge" variants={items}>
                React
              </motion.li>
              <motion.li className="badge" variants={items}>
                React
              </motion.li>
              <motion.li className="badge" variants={items}>
                React
              </motion.li>
              <motion.li className="badge" variants={items}>
                React
              </motion.li>
              <motion.li className="badge" variants={items}>
                React
              </motion.li>
            </motion.ul>
            <motion.p
              className="text-2xl mt-5"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "easeIn" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              sit incidunt earum asasaas
            </motion.p>
          </article>
        </div>

        <div className="flex flex-col mt-10 md:flex-row">
          <div className="flex-col text-center m-10">
            <p className="text-3xl mt-10">Lorem ipsum</p>
            <p className="text-xl mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              sit incidunt earum asasaas
            </p>
          </div>
          <img src={Portrait} alt="portrait" width={500} height={250} />
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default Projects;
