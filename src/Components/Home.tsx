import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.webp";
import { StyledHome } from "./Home.styled";

const Home = () => {
  return (
    <StyledHome>
      <div className="text-zone">
        <h1>
          Hi <br /> I'm
          <div className="name">
            <img src={logo} alt="logo" width={40} />
            <span>ushma</span>
          </div>
          Web Developer
        </h1>
        <h2>Frontend Developer / Javascript Expert</h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>

      <img src={avatar} alt="avatar" className="image" />
    </StyledHome>
  );
};

export default Home;
