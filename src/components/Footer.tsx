import {
  useAnimate,
  usePresence,
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";

function Footer() {
  
  const variants = {
    appear: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        opacity: 1,
      },
    },
    hidden: {
      transition: { staggerChildren: 0.05, staggerDirection: 1 },
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
    <section id='contacts-section' className="contacts">
      <h1 className="title text-4xl">Connect With Me</h1>

      <motion.div className="flex justify-evenly" variants={variants}
        initial="hidden"
        whileInView="appear">
          <motion.a whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} variants={items} href="https://github.com/erwinmareto" target="_blank" className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></motion.a>
          <motion.a whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} variants={items} href="https://www.linkedin.com/in/erwin-mareto-wikas-a29360233/" target="_blank" className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></motion.a>
          <motion.a whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} variants={items} href="https://github.com/erwinmareto" target="_blank" className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></motion.a>
        {/* <motion.div className="icon" variants={items}>P</motion.div>
        <motion.div className="icon" variants={items}>P</motion.div>
        <motion.div className="icon" variants={items}>P</motion.div> */}
      </motion.div>
      <motion.svg
        // initial={{ opacity: 0 }}
        variants={variants}
        initial="hidden"
        whileInView="appear"
        className="waves"
        id="visual"
        viewBox="0 0 1349 300"
        width="1349"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
        
        version="1.1"
      >
        <motion.path
          d="M0 61L32.2 59.8C64.3 58.7 128.7 56.3 192.8 66.2C257 76 321 98 385.2 99.3C449.3 100.7 513.7 81.3 578 74.5C642.3 67.7 706.7 73.3 771 83.7C835.3 94 899.7 109 963.8 115C1028 121 1092 118 1156.2 108.3C1220.3 98.7 1284.7 82.3 1316.8 74.2L1349 66L1349 301L1316.8 301C1284.7 301 1220.3 301 1156.2 301C1092 301 1028 301 963.8 301C899.7 301 835.3 301 771 301C706.7 301 642.3 301 578 301C513.7 301 449.3 301 385.2 301C321 301 257 301 192.8 301C128.7 301 64.3 301 32.2 301L0 301Z"
          fill="#8e8ffa"
          variants={items}
        ></motion.path>
        <motion.path
          d="M0 182L32.2 172.3C64.3 162.7 128.7 143.3 192.8 139.3C257 135.3 321 146.7 385.2 156.3C449.3 166 513.7 174 578 179.8C642.3 185.7 706.7 189.3 771 185.5C835.3 181.7 899.7 170.3 963.8 163.8C1028 157.3 1092 155.7 1156.2 162.3C1220.3 169 1284.7 184 1316.8 191.5L1349 199L1349 301L1316.8 301C1284.7 301 1220.3 301 1156.2 301C1092 301 1028 301 963.8 301C899.7 301 835.3 301 771 301C706.7 301 642.3 301 578 301C513.7 301 449.3 301 385.2 301C321 301 257 301 192.8 301C128.7 301 64.3 301 32.2 301L0 301Z"
          fill="#9eb6ff"
          variants={items}
        ></motion.path>
        <motion.path
          d="M0 256L32.2 252.2C64.3 248.3 128.7 240.7 192.8 236.5C257 232.3 321 231.7 385.2 233.3C449.3 235 513.7 239 578 233.2C642.3 227.3 706.7 211.7 771 204.3C835.3 197 899.7 198 963.8 200C1028 202 1092 205 1156.2 212.8C1220.3 220.7 1284.7 233.3 1316.8 239.7L1349 246L1349 301L1316.8 301C1284.7 301 1220.3 301 1156.2 301C1092 301 1028 301 963.8 301C899.7 301 835.3 301 771 301C706.7 301 642.3 301 578 301C513.7 301 449.3 301 385.2 301C321 301 257 301 192.8 301C128.7 301 64.3 301 32.2 301L0 301Z"
          fill="#c2d9ff"
          variants={items}
        ></motion.path>
      </motion.svg>
      
    </section>
  );
}

export default Footer;
