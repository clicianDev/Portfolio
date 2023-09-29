import { motion } from "framer-motion";

import { styles } from "../styles";
import RoomCanvas from "./canvas/Room";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
const Hero = (props) => {
  const [isLoad, setIsLoad] = useState(false);
  const [pageId, setPageId] = useState(0);

  useEffect(() => {
    setPageId(props.pageId);
  }, [props.pageId]);

  const handleLoad = (index) => {
    setIsLoad(index);
  };

  return (
    <section className={`flex w-full h-screen mx-auto`}>
      <RoomCanvas load={handleLoad} pageId={pageId} />
      <div
        className={`${
          isLoad ? "block " : "hidden" // Use a ternary operator to conditionally apply 'hidden' class
        } py-20 w-full mx-auto ${
          styles.paddingX
        } flex flex-row items-start gap-5 drop-shadow-2xl`}
      >
        {pageId == 0 ? <Home /> : null}
        {pageId == 1 ? <About /> : null}
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className=" w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
