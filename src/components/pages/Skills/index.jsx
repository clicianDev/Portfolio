import React from "react";

import { styles } from "../../../styles";

import TableSkills from "./TableSkills";
import SkillsTree from "./SkillsTree";
function Skills() {
  return (
    <section className="p-20 w-full h-max mx-auto">
      <div
        className={`w-full mx-auto ${styles.paddingX} items-start gap-5 drop-shadow-2xl mb-20`}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>Skills</h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
           This skills data are from skills.json then map all the skills to display in jsx
          </p>
      </div>
      <div className={`${styles.paddingX}  flex`}>
       
        <TableSkills/>
       
        <div className="w-full ">
        <SkillsTree/>
        </div>
      </div>
    </section>
  );
}

export default Skills;
