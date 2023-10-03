import { React, useState, useEffect } from "react";
import RoomCanvas from "../canvas/Room";
import Home from "./Hero/Home";
import { motion } from "framer-motion";
import { styles } from "../../styles";

function About(props) {
  const [isLoad, setIsLoad] = useState(false);
  const [pageId, setPageId] = useState(0);

  useEffect(() => {
    setPageId(props.pageId);
  }, [props.pageId]);

  const handleLoad = (index) => {
    setIsLoad(index);
  };

  return (
    <section className={` ${styles.paddingX}  flex w-auto h-max mx-auto`}>
      <div className="w-1/2 ">a</div>
      <div
        className={` py-20 w-1/2 mx-auto ${styles.paddingX}  items-start gap-5 drop-shadow-2xl`}
      >
        <p className={`${styles.aboutSubText} mt-2 text-white-100`}>
          With over three years of web development experience, I started as a
          WordPress developer specializing in{" "}
          <span className="hover:text-3xl hover:p-1 text-violet-500">PHP</span>{" "}
          and{" "}
          <span className="hover:text-3xl hover:p-1 text-orange-300">
            MySQL
          </span>{" "}
          before transitioning to a front-end role at Virtual Labs. There, I
          worked with Laravel and expanded my skill set to include{" "}
          <span className="hover:text-3xl hover:p-1 text-green-300">
            Node.js
          </span>{" "}
          technologies like{" "}
          <span className="hover:text-3xl hover:p-1 text-cyan-200">React</span>,{" "}
          <span className="hover:text-3xl hover:p-1 text-green-200">Vue</span>,
          <span className="hover:text-3xl hover:p-1 text-white">Next.js</span>,
          and{" "}
          <span className="hover:text-3xl hover:p-1 text-green-400">
            Nuxt.js
          </span>
          . I also gained expertise in{" "}
          <span className="hover:text-3xl hover:p-1 text-white">Three.js</span>{" "}
          for 3D visuals.
        </p>
        <p className={`${styles.aboutSubText} mt-2 text-white-100`}>
          Additionally, I ventured into game development with{" "}
          <span className="underline text-secondary">Unreal Engine</span>,
          learning about{" "}
          <span className="underline text-secondary">PixelStreaming</span>,
          which involves streaming UE games to cloud servers for web access via
          WEBRTC. During my time at Virtual Labs, I took on the role of a
          full-stack developer, managing backend tasks such as creating{" "}
          <span className="underline text-secondary">RESTful APIs</span>,
          working with{" "}
          <span className="hover:text-3xl hover:p-1 text-green-400">
            MongoDB
          </span>
          , and deploying and maintaining{" "}
          <span className="underline text-secondary">AWS</span> servers running{" "}
          <span className="underline text-secondary">Ubuntu</span> and{" "}
          <span className="underline text-secondary">Linux</span>.
        </p>
      </div>
    </section>
  );
}

export default About;
