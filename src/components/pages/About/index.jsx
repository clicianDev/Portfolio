import { React, useState, useEffect } from "react";
import RoomCanvas from "../../canvas/Room";
import Home from "../Hero/Home";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import Info from "./Info";

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
     <Info/>
    </section>
  );
}

export default About;
