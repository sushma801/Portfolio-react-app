import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { StyledHeader } from "./Headers.styled";

const Headers = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 656); // Change 656 to your desired breakpoint
  };

  useEffect(() => {
    handleResize();
    // Attach the listener to the window resize event
    window.addEventListener("resize", handleResize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledHeader>
      <NavLink to="/">Portfolio</NavLink>
      <div className="rightTab">
        <NavLink to={"/"}>
          {isSmallScreen ? <AiFillHome className="header-icon" /> : "Home"}
        </NavLink>
        <NavLink to={"/about"}>
          {isSmallScreen ? (
            <BsFillInfoCircleFill className="header-icon" />
          ) : (
            "About"
          )}
        </NavLink>
        <NavLink to={"/contact"}>
          {isSmallScreen ? (
            <BiSolidContact className="header-icon" />
          ) : (
            "Contact Me"
          )}
        </NavLink>
      </div>
    </StyledHeader>
  );
};

export default Headers;
