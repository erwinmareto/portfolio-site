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
        <article className="flex flex-wrap-reverse z-10 lg:grid lg:grid-cols-2 lg:gap-32" ref={ref}>
          <motion.div
            className="box"
            viewport={{ once: true, amount: 0.8 }}
            whileInView={{ rotate: 90 }}
            transition={{ type: "inertia", velocity: 600 }}
          />
          <motion.p
            className="text-l text-left mt-10 md:text-xl"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            dolorum eaque voluptatibus architecto, excepturi similique
            reiciendis! Libero eum aliquam molestias dolore dignissimos
            nesciunt, error itaque in recusandae aut tempore fugit? Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Unde natus delectus id
            ab consequatur! Quisquam neque velit, corrupti harum dolorum, animi
            inventore quae illum beatae ipsum voluptatibus delectus, voluptatum
            maxime.
          </motion.p>

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