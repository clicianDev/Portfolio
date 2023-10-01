import React from "react";
import { styles } from "../../../styles"
function SkillsTree() {
  return (
   
      <div className="flex flex-row gap-5 justify-evenly">
      <div>
        <div className="backendbg w-full "  >
        <h2 className={`${styles.heroSubText} my-3 text-primary font-bold mx-20`}>
            FrontEnd
          </h2>
        </div>
        
      </div>
      <div>
        <div className="backendbg w-full ">
          <h2 className={`${styles.heroSubText} my-3 text-primary font-bold mx-20`}>
              BackEnd
            </h2>
        </div>
        
      </div>
      </div>
   
  );
}

export default SkillsTree;
