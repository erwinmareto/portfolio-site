import {
  useAnimate,
  usePresence,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";

function Component() {
  const [visible, setVisible] = useState(true);
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  const [sec, move] = useAnimate();

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.25,
        stiffness: 1000,
        delay: 5,
      },
    },
  };

  async function moveDown() {
    await move(sec.current, { opacity: 0 });
    await move(sec.current, { opacity: 1 });
    await move(sec.current, { y: 20 }, { delay: 4 });
    setVisible(false)
    await move(sec.current, { opacity: 0 });
  }
  async function myAnimation() {
    await animate(scope.current, { opacity: 0 });
    await animate(scope.current, { opacity: 1 });
    await animate(scope.current, { y: -20 }, { delay: 4 });
    await animate(scope.current, { opacity: 0 });
    // setVisible(false)
  }

  useEffect(() => {
    myAnimation();
    moveDown();
  }, []);

  return (
    <motion.div className="w-32 h-32 bg-teal-200 gap-10">
      <AnimatePresence>
        {true && <motion.h1 ref={sec}>HI</motion.h1>}
      </AnimatePresence>
      <motion.h1
        variants={variants}
        initial="hidden"
        animate="show"
        className="text-2xl"
      >
        HELLO
      </motion.h1>
      {true && <motion.h1 ref={scope}>HEY</motion.h1>}
    </motion.div>
  );
}

export default Component;
