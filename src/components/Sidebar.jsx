import React, { useState } from "react";
import { FaUser, FaHouseChimney, FaBriefcase, FaPhone } from "react-icons/fa6";

const sidebarList = [
  {
    title: "Home",
    icons: <FaHouseChimney color="#1A1615" />,
  },
  {
    title: "About",
    icons: <FaUser color="#1A1615" />,
  },
  {
    title: "Portfolio",
    icons: <FaBriefcase color="#1A1615" />,
  },
  {
    title: "Contact",
    icons: <FaPhone color="#1A1615" />,
  },
];

function Sidebar(props) {
  const [isHovering, setIsHovering] = useState(Array(sidebarList.length).fill(false));
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseOver = (index) => {
    const newHoverState = [...isHovering];
    newHoverState[index] = true;
    setIsHovering(newHoverState);
  };

  const handleMouseOut = (index) => {
    const newHoverState = [...isHovering];
    newHoverState[index] = false;
    setIsHovering(newHoverState);
  };

  const handleOnClick = (index) => {
    setActiveIndex(index); // Set the active index when a button is clicked
    props.pageId(index); // Call the pageId prop with the index parameter
  };

  return (
    <div className="fixed right-8 top-1/4 overflow-hidden">
      <ul className="space-y-10">
        {sidebarList.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => handleOnClick(index)}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={() => handleMouseOut(index)}
              className={`bg-secondary rounded-full w-fit p-4 flex items-center ${
                activeIndex === index ? "bg-primary" : "bg-secondary"
              }`}
            >
              {isHovering[index] && <span className="text-lg text-tertiary">{item.title}</span>}

              <span>{item.icons}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
