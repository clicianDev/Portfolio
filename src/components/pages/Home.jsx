import React from 'react'
import { styles } from "../../styles";
import { motion } from "framer-motion";

function Home() {
    return ( 
        <div
       >
             <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-primary'>Clician Deo</span> Full Stack Developer
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
         
     );
}

export default Home;