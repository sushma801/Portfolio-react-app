import React from "react";
import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <div className="flex flex-row justify-between p-1 bg-primary text-white font-bold pr-2">
      <span className="text-xs w-3/4">
        <NavLink to="/">Portfolio.</NavLink>
      </span>
      <div className="flex flex-row w-1/4 justify-between text-xs">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact Me</NavLink>
      </div>
    </div>
  );
};

export default Headers;
