import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <section id="contacts-section" className="contacts">
      <h1 className="title text-4xl">Connect With Me</h1>

      <motion.div
        className="flex justify-evenly"
        variants={variants}
        initial="hidden"
        whileInView="appear"
      >
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          variants={items}
          href="https://github.com/erwinmareto"
          target="_blank"
          className="icon"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          variants={items}
          href="https://www.linkedin.com/in/erwin-mareto-wikas-a29360233/"
          target="_blank"
          className="icon"
        >
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          variants={items}
          href = "mailto:erwinmaretow@gmail.com"
          target="_blank"
          className="icon"
        >
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
        </motion.a>
      </motion.div>
      <motion.svg
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
