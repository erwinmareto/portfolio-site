import { useRef } from "react";
import { useInView, motion } from "framer-motion";

import Portrait from "../assets/profile.png";
import "./styles.scss";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="about" id="about-section">
      <div className="flex flex-col container">
        <motion.div
          className="title title-bg"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <motion.h1
            className="text-6xl lg:text-8xl"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            About
          </motion.h1>
        </motion.div>
        <article
          className="flex flex-wrap-reverse z-10 lg:grid lg:grid-cols-2 lg:gap-32"
          ref={ref}
        >
          <motion.div
            className="box"
            viewport={{ once: true, amount: 0.8 }}
            whileInView={{ rotate: 90 }}
            transition={{ type: "inertia", velocity: 600 }}
          />
          <div>
            <motion.p
              className="text-l text-left mt-10 md:text-xl"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              Hello! My name is Erwin Mareto Wikas, you can call me Erwin. I am
              a web developer that specializes in utilizing JavaScript libraries
              and frameworks like ExpressJS, React JS, and Next JS.
            </motion.p>
            <motion.p
              className="text-l text-left mt-10 md:text-xl"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              My journey into coding commenced due to financial constraints
              preventing me from pursuing a traditional college education. This
              has fueled my proactive approach to learning and led me to enroll
              in a full-stack web development bootcamp earlier this year,During
              the bootcamp, I actively collaborated on a final project to create
              a job portal application. This experience honed my research,
              analytical, and problem-solving skills, and my background ensured
              I seamlessly contributed to the team's development.
            </motion.p>
            <motion.p
              className="text-l text-left mt-10 md:text-xl"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              My interest in programming deepened during my completion of
              Harvard’s CS50x course, where I not only gained a solid foundation
              in computer science but also developed robust problem-solving
              skills. This experience, coupled with my bootcamp training, has
              equipped me with a strong technical skill set.
            </motion.p>
          </div>

          <motion.img
            src={Portrait}
            alt="Portrait"
            viewport={{ once: true, amount: 0.8 }}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          />
        </article>
      </div>
    </section>
  );
};
export default About;
