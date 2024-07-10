import React from "react";
import { Link } from "react-router-dom";

function Lists({ texts = [""], ...props }) {
  const before =
    "before:absolute before:-left-[5%] before:bg-yellow before:h-[120%] before:w-0 before:z-[-5] before:ease-in-out before:duration-300 ";

  const onHover = "hover:text-dark-blue hover:before:w-[110%] ";

  const responsive = "md:hover:text-dark-blue ";

  const selected =
    "before:w-[110%] text-dark-blue md:text-dark-blue md:hover:text-dark-blue";

  return texts.map((text) => (
    <li
      key={text}
      className={
        "relative text-lg font-bold text-white px-2 z-10 flex justify-start items-center ease-in-out duration-150 selection:bg-dark-blue selection:text-white " +
        before +
        onHover +
        responsive +
        props.style +
        " " +
        (props.path == text.toLowerCase().replace(" ", "-") ? selected : "")
      }
      onClick={props.onClick}
    >
      <Link to={text.toLowerCase().replace(" ", "-")}>{text}</Link>
    </li>
  ));
}

export default Lists;
