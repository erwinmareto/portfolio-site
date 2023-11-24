import { motion } from "framer-motion";
import "./styles.scss";

const Navbar = () => {
  window.onscroll = () => {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
  };
  return (
    <nav id="navbar">
      <div className="nav-menu">
        <motion.a
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.75 }}
          href="#about-section"
          className="nav-item"
        >
          About
        </motion.a>
        <motion.a
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.75 }}
          href="#projects-section"
          className="nav-item"
        >
          Projects
        </motion.a>
        <motion.a
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.75 }}
          href="#contacts-section"
          className="nav-item"
        >
          Contacts
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
