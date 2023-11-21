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

        {/* <h1 className="text-4xl bg-slate-100 rounded-3xl px-3 py-1 m-1">About</h1> */}
      </div>
      {/* <h1 className="float-right">gyhghg</h1> */}
      {/* <h1>Name</h1>
            <h1>Login</h1> */}
    </nav>
  );
};

export default Navbar;
