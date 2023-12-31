import { useRef } from "react";
import { motion } from "framer-motion";

import Skills from "./Skills";
import Carousel from "./Carousel";
import "./styles.scss";

const Projects = () => {
  const ref = useRef(null);
  const wihireStack = [
    "ReactJS",
    "NextJS",
    "TailwindCSS",
    "ExpressJS",
    "PrismaORM",
    "PostgreSQL",
  ];

  const starter = {
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
    <section id="projects-section" className="projects mx-auto py-10">
      <div className="flex justify-center">
        <div className="container">
          <motion.div
            className="title title-bg"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "easeIn",
              duration: 2,
            }}
          >
            <h1 className="text-6xl lg:text-8xl">Projects</h1>
          </motion.div>

          <div className="flex flex-col my-10">
            <div className="grid">
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
                WiHire
              </motion.p>
              <motion.ul
                variants={starter}
                initial="hidden"
                whileInView="appear"
                viewport={{ once: true, amount: 0.8 }}
                className="badge-list"
              >
                {wihireStack.map((title) => (
                  <motion.li className="badge" variants={items}>
                    {title}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p
                className="text-2xl font-['poppins'] mt-5"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "easeIn" }}
              >
                Job portal application that facillitates effortless connections between companies and job seekers with detailed information.
              </motion.p>
            </article>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default Projects;
