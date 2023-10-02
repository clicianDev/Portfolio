import React from "react";
import { styles } from "../../../styles";
import Skills from "./skills.json";
import { motion } from "framer-motion";
function SkillsTree() {
  return (
    <div className="flex gap-5 justify-evenly ">
      {Skills.map((item, index) => (
        <div key={index}>
          <div className="backendbg w-full ">
            <h2
              className={`${styles.heroSubText} my-3 uppercase text-primary font-bold mx-20`}
            >
              {item.title}
            </h2>
          </div>
          <div class="vl" />
          <div className={`w-full h-full bg-contain bg-no-repeat grid ${index === 1 ? `grid-cols-3 gap-x-0 gap-y-0 place-items-center` : `grid-cols-4`} gap-x-8 gap-y-1 `}>
            {item.stacks.map((stack, stackIndex) => (
              <div
                key={stackIndex}
                className={` h-14 ${
                  (stackIndex === 4 || stackIndex === 6) && index === 0
                    ? "col-start-2 col-end-3"
                    : ""
                }`}
              >
                <div className="w-max font-semibold text-white text-lg text-center justify-center ">
                  <span className={`my-2 p-2 bg-secondary rounded-xl hidden`}>
                    {stack}
                  </span>
                  <motion.button
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: stackIndex / 3 }}
                    variants={{
                      visible: { opacity: 1, scale: 1 },
                      hidden: { opacity: 0, scale: 0 },
                    }}
                    className="p-3 h-max w-max bg-secondary  rounded-full border-2 border-secondary hover:border-y-green-400 drop-shadow-default hover:drop-shadow-green"
                  >
                    <img
                      height={30}
                      width={30}
                      src={`./skills/logo/${item.title}/${stack}.svg`}
                    />
                  </motion.button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsTree;
