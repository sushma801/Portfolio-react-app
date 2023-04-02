import React from "react";
import { FaReact, FaAngular } from "react-icons/fa";
import { DiJavascript, DiSass } from 'react-icons/di';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiRedux, SiTailwindcss } from 'react-icons/si';
import { IoLogoCss3 } from 'react-icons/io';
import Rating from "@mui/material/Rating";
import avatar from "../assets/avatar.webp";

const About = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col justify-between w-5/6">
        <div className="text-zone">
          <h1>About me</h1>
          <p className="text-xs">
            I'm very ambitious fron-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p className="text-xs">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
        </div>
        <div className="text-zone">
          <h1>Skills</h1>
          <div className="flex flex-row justify-between font-serif">
            <div className="flex flex-col w-1/2">
              <div className="flex flex-row items-center text-sm">
                <p>React</p>
                <FaReact
                  style={{
                    color: "#3486eb",
                    marginRight: "1rem",
                    marginLeft: "0.5rem",
                  }}
                />
              </div>
              <Rating name="read-only" value={3} disabled size="small"/>
            </div>

            <div className="flex flex-col w-1/2">
              <div className="flex flex-row items-center text-sm">
                <p>Angular</p>
                <FaAngular
                  style={{
                    color: "#a11528",
                    marginRight: "1rem",
                    marginLeft: "0.5rem",
                  }}
                />
              </div>
              <Rating name="read-only" value={3} disabled size="small" />
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-1/2">
              <div className="flex flex-row items-center text-sm">
                <p>JavaScript</p>
                <DiJavascript
                  style={{
                    color: "#EFD819",
                    marginRight: "1rem",
                    marginLeft: "0.5rem",
                  }}
                />
              </div>
              <Rating name="read-only" value={3} disabled size="small" />
            </div>

            <div className="flex flex-col w-1/2">
              <div className="flex flex-row items-center text-sm">
                <p>HTML5</p>
                <AiOutlineHtml5
                  style={{
                    color: "#DD4B25",
                    marginRight: "1rem",
                    marginLeft: "0.5rem",
                  }}
                />
              </div>
              <Rating name="read-only" value={3} disabled size="small" />
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-1/2">
              <div className="flex flex-row items-center text-sm">
                <p>CSS3</p>
                <IoLogoCss3
                  style={{
                    color: "#265DE6",
                    marginRight: "1rem",
                    marginLeft: "0.5rem",
                  }}
                />
              </div>
              <Rating name="read-only" value={3} disabled size="small" />
            </div>

            <div className="flex flex-col w-1/2">
              <div className="flex flex-row items-center text-sm">
                <p>React-Redux</p>
                <SiRedux
                  style={{
                    color: "#7348B6",
                    marginRight: "1rem",
                    marginLeft: "0.5rem",
                  }}
                />
              </div>
              <Rating name="read-only" value={3} disabled size="small" />
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-1/2">
              <div className="flex flex-row items-center text-sm">
                <p>SASS</p>
                <DiSass
                  style={{
                    color: "#C66493",
                    marginRight: "1rem",
                    marginLeft: "0.5rem",
                  }}
                />
              </div>
              <Rating name="read-only" value={2} disabled size="small" />
            </div>

            <div className="flex flex-col w-1/2">
              <div className="flex flex-row items-center text-sm">
                <p>Tailwindcss</p>
                <SiTailwindcss
                  style={{
                    color: "#09B0CD",
                    marginRight: "1rem",
                    marginLeft: "0.5rem",
                  }}
                />
              </div>
              <Rating name="read-only" value={2} disabled size="small" />
            </div>
          </div>

        </div>
      </div>
      <div className="mt-12  ">
      <img src={avatar} width={300}  alt="avatar" />
      </div>
    </div>
  );
};

export default About;
