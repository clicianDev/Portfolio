import React from "react";
import { styles } from "../../../styles";
import Skills from "./skills.json";
function SkillsTree() {
  return (
    <div className="flex flex-row gap-5 justify-evenly">
      {Skills.map((item, index) => (
        <div key={index}>
          <div className="backendbg w-full ">
            <h2
              className={`${styles.heroSubText} my-3 text-primary font-bold mx-20`}
            >
              {item.title}
            </h2>
          </div>
          <div class="vl" />
          <div className="bg-backend-bg w-full h-full bg-cover bg-no-repeat grid grid-cols-4 gap-4">
            {item.stacks.map((stack, stackIndex) => (
              <div key={stackIndex} className={`bg-white ${stackIndex === 4 ? 'col-start-2  col-end-3' :''} ${stackIndex === 6 ? 'col-start-2  col-end-3' :''}`}>
                {stack}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsTree;
