import React from "react";
import { styles } from "../../styles";
function About() {
  return (
    <div className="flex">
      <div className="w-1/2">
      <h1 className={`${styles.heroHeadText} text-white`}>About</h1>
      </div>
      <div className="w-full">
        <div>
          <img src="./skills.png" />
        </div>
      </div>
    </div>
  );
}

export default About;
