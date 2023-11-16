import Header from "./components/Header";

import About from "./components/About";
import Projects from "./components/Projects";
import Carousel from "./components/Carousel";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      />
      {/* <Navbar /> */}
      <Header />
      <About />
      <Projects />
      {/* <Skills /> */}
      {/* <AnimatePresence>
   <Component key="dialog" />
</AnimatePresence> */}
<button onClick={() => show ? setShow(false) : setShow(true)}>CHANGE</button>
    </>
  );
}

export default App;
