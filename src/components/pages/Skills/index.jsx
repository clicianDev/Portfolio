import React from "react";

import { styles } from "../../../styles";

import TableSkills from "./TableSkills";
import SkillsTree from "./SkillsTree";
function Skills() {
  return (
    <div>
      <div
        className={`w-full mx-auto ${styles.paddingX} flex flex-row items-start gap-5 drop-shadow-2xl`}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>Skills</h1>
      </div>
      <div className={`${styles.paddingX} flex items-center`}>
        <div className="w-1/2 flex flex-row gap-5">
        <TableSkills/>
        </div>
        <div className="w-full">
        <SkillsTree/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
