import React from "react";

import { styles } from "../../../styles";

import TableSkills from "./TableSkills";
import SkillsTree from "./SkillsTree";
function Skills() {
  return (
    <div className="p-20">
      <div
        className={`w-full mx-auto ${styles.paddingX} items-start gap-5 drop-shadow-2xl mb-20`}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>Skills</h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
           This skills data are from skills.json then map all the skills to display in jsx
          </p>
      </div>
      <div className={`${styles.paddingX} flex `}>
        <div className="w-1/2 flex flex-row gap-5">
        <TableSkills/>
        </div>
        <div className="w-full ">
        <SkillsTree/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
