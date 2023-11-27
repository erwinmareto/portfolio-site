import { motion } from "framer-motion";

import pythonLogo from "../assets/logos/python-logo.png";
import htmlLogo from "../assets/logos/html-logo.png";
import cssLogo from "../assets/logos/css3.png";
import jsLogo from "../assets/logos/js-logo.png";
import tsLogo from "../assets/logos/ts-logo.png";
import tailwindLogo from "../assets/logos/tailwind-logo.webp";
import "./styles.scss";

const Skills = () => {
    const cardProps = [
        {
            image: pythonLogo,
            title: 'Python',
            color: 'bg-sky-700'
        },
        {
            image: htmlLogo,
            title: 'HTML',
            color: 'bg-orange-600'
        },
        {
            image: cssLogo,
            title: 'CSS',
            color: 'bg-blue-700'
        },
        {
            image: jsLogo,
            title: 'JavaScript',
            color: 'bg-yellow-400'
        },
        {
            image: tsLogo,
            title: 'TypeScript',
            color: 'bg-blue-500'
        },
        {
            image: tailwindLogo,
            title: 'Tailwind CSS',
            color: 'bg-sky-300'
        },
        {
            image: pythonLogo,
            title: 'Python',
            color: 'bg-sky-700'
        },
        {
            image: htmlLogo,
            title: 'HTML',
            color: 'bg-orange-600'
        },
        {
            image: cssLogo,
            title: 'CSS',
            color: 'bg-blue-700'
        },
        {
            image: jsLogo,
            title: 'Javacript',
            color: 'bg-yellow-400'
        },
        {
            image: tsLogo,
            title: 'TypeScript',
            color: 'bg-blue-500'
        },
        {
            image: tailwindLogo,
            title: 'Tailwind CSS',
            color: 'bg-sky-300'
        },
    ]
  return (
    <>
      <h1 className="title text-6xl text-center bg-transparent lg:text-8xl">Skills</h1>
      
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {cardProps.map((data) => (
            <motion.div className="flip-card " viewport={{once: true}} whileInView={{rotateY:'360deg', transition: {duration:1}}}>
            <div className="flip-card-inner ">
              <div className={`flip-card-front ${data.color}`}>
                <img src={data.image} width={150} />
              </div>
              <div className={`flip-card-back ${data.color}`}>
                <h1 className="text-xl md:text-3xl">{data.title}</h1>
              </div>
            </div>
          </motion.div>
        ))}
       
      </section>
    </>
  );
};

export default Skills;
