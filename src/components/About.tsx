import Portrait from "../assets/Group(1).png";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import "./styles.scss";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section className="about" ref={ref}>
      <div className="flex flex-col container">
        <motion.div
          className="title title-bg"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h1
            className="text-6xl md:text-8xl"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            About
          </h1>
        </motion.div>
        <article className="flex flex-wrap-reverse md:grid md:grid-cols-2 md:gap-32">
          <p className="text-xl mt-10 body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            dolorum eaque voluptatibus architecto, excepturi similique
            reiciendis! Libero eum aliquam molestias dolore dignissimos
            nesciunt, error itaque in recusandae aut tempore fugit? Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Unde natus delectus id
            ab consequatur! Quisquam neque velit, corrupti harum dolorum, animi
            inventore quae illum beatae ipsum voluptatibus delectus, voluptatum
            maxime.
          </p>
          {/* <p className='text-xl mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum
          eaque voluptatibus architecto, excepturi similique reiciendis! Libero
          eum aliquam molestias dolore dignissimos nesciunt, error itaque in
          recusandae aut tempore fugit? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Unde natus delectus id ab consequatur! Quisquam
          neque velit, corrupti harum dolorum, animi inventore quae illum beatae
          ipsum voluptatibus delectus, voluptatum maxime.
        </p> */}

          <img src={Portrait} alt="portrait" width={400} height={250} />
        </article>
      </div>
    </section>
  );
};
export default About;
