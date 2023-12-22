import { motion } from "framer-motion";

import pythonLogo from "../assets/logos/python-logo.png";
import htmlLogo from "../assets/logos/html-logo.png";
import cssLogo from "../assets/logos/css3.png";
import jsLogo from "../assets/logos/js-logo.png";
import tsLogo from "../assets/logos/ts-logo.png";
import tailwindLogo from "../assets/logos/tailwind-logo.png";
import reactLogo from "../assets/logos/react-logo.png"
import nextjsLogo from "../assets/logos/nextjs-logo.png"
import expressLogo from "../assets/logos/express-logo.png"
import prismaLogo from "../assets/logos/prisma-logo.png"
import postgresLogo from "../assets/logos/postgres-logo.png"
import nodejsLogo from "../assets/logos/node-logo.png"
import dockerLogo from "../assets/logos/docker-logo.png"
import gitLogo from "../assets/logos/git-logo.png"

import "./styles.scss";

const Skills = () => {
    const cardProps = [
        // {
        //     image: pythonLogo,
        //     title: 'Python',
        //     color: 'bg-sky-700'
        // },
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
        // {
        //     image: tsLogo,
        //     title: 'TypeScript',
        //     color: 'bg-blue-500'
        // },
        {
            image: tailwindLogo,
            title: 'Tailwind CSS',
            color: 'bg-sky-300'
        },
        {
            image: reactLogo,
            title: 'React JS',
            color: 'bg-cyan-500'
        },
        {
            image: nextjsLogo,
            title: 'Next JS',
            color: 'bg-slate-950'
        },
        {
            image: nodejsLogo,
            title: 'Node JS',
            color: 'bg-green-500'
        },
        {
            image: postgresLogo,
            title: 'PostgreSQL',
            color: 'bg-cyan-900'
        },
        {
            image: expressLogo,
            title: 'Express JS',
            color: 'bg-slate-300'
        },
        {
            image: prismaLogo,
            title: 'Prisma ORM',
            color: 'bg-[#0C344B]'
        },
        {
            image: dockerLogo,
            title: 'Docker',
            color: 'bg-blue-600'
        },
        {
            image: gitLogo,
            title: 'Git',
            color: 'bg-gray-800'
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
