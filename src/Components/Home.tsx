import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.webp";
import "./Home.scss";

const Home = () => {
  return (
    <div className="flex flex-row justify-between">
	  <div className="text-zone">
	  <h1>
          Hi <br /> I'm
          <div className="flex flex-row items-center">
            <img src={logo} alt="logo"/>
            <p className="mt-1">ushma</p>
          </div>
          Web Developer
        </h1>
		<h2>Frontend Developer / Javascript Expert</h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
	  </div>
	  <div className="mt-12">
      <img src={avatar} width={250} alt="avatar"/>
	  </div>
    </div>
  );
};

export default Home;
