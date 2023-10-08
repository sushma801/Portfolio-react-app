import React from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Headers.styled";

const Headers = () => {
  return (
    <StyledHeader>
      <NavLink to="/">Portfolio</NavLink>
      <div className="rightTab">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact Me</NavLink>
      </div>
    </StyledHeader>
  );
};

export default Headers;
