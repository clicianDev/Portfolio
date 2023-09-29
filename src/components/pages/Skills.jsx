import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import skills from "./skills.json";
function Skills() {
  return (
    <div>
      <div
        className={`w-full mx-auto ${styles.paddingX} flex flex-row items-start gap-5 drop-shadow-2xl`}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>Skills</h1>
      </div>
      <div className={`${styles.paddingX} flex items-center`}>
        <div class="w-1/2 flex flex-row gap-5">
          {skills.map((item, index) => (
            <div key={index}>
              <h2 className={`${styles.heroSubText} mt-2 text-white-100`}>
                {item.title}
              </h2>
              <div className="sm:px-8 px-2">
                <ul
                  className={`list-disc font-medium lg:text-[24px] sm:text-[20px] xs:text-[16px] text-[16px] lg:leading-[40px] mt-2 text-white`}
                >
                  {item.stacks.map((item, index) => (
                    <motion.li
                      key={index}
                      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div>
            <img src="./skills.png" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
