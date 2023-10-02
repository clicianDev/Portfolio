import React from "react";
import skills from "./skills.json";
import { motion } from "framer-motion";
import { styles } from "../../../styles";

function TableSkills() {
  return (
    <div className="w-1/2 gap-5 ">
      {skills.map((item, index) => (
        <div key={index}>
           <div>
        <h2 className={`${styles.heroSubText} uppercase  my-3 text-primary font-extrabold mx-20`}>
            {item.title}
          </h2>
        </div>
          <div className="sm:px-8 px-2">
            <ul
              className={`list-disc grid grid-cols-2 font-medium lg:text-[24px] sm:text-[20px] xs:text-[16px] text-[16px] lg:leading-[40px] mt-2 text-white`}
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
                    hidden: { opacity: 0, scale: 0 },
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
  );
}

export default TableSkills;
