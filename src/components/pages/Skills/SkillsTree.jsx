import React from "react";
import { styles } from "../../../styles"
function SkillsTree() {
  return (
   
      <div className="flex flex-row gap-5">
      <div>
        <div>
        <h2 className={`${styles.heroSubText} mt-2 text-white-100`}>
            FrontEnd
          </h2>
        </div>
        
      </div>
      <div>
        <div className="backendbg w-max h-max">
          <h2 className={`${styles.heroSubText} mt-2 text-white-100`}>
              BackEnd
            </h2>
        </div>
        
      </div>
      </div>
   
  );
}

export default SkillsTree;
