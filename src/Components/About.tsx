import React, { ReactNode } from "react";
import { FaReact, FaAngular, FaJava, FaPython } from "react-icons/fa";
import { DiJavascript, DiSass } from "react-icons/di";
import { AiOutlineHtml5, AiFillAndroid } from "react-icons/ai";
import {
  SiRedux,
  SiTailwindcss,
  SiFlutter,
  SiTestinglibrary,
  SiJest,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandKotlin, TbBrandMysql } from "react-icons/tb";
import Rating from "@mui/material/Rating";
import avatar from "../assets/avatar.webp";
import { StyledAbout } from "./About.styled";

interface IconType {
  label: string;
  children: ReactNode;
  ratingValue?: number;
  openLink?: () => void;
}

const certificationSet: IconType[] = [
  {
    label: "Recognize by the Organization for team Player",
    children: <></>,
  },
  {
    label: "Problem Solving (Basic)",
    children: (
      <button
        className="web-sites"
        onClick={() =>
          window.open("https://www.hackerrank.com/certificates/ad621dc9e4e2")
        }
      >
        Click to see
      </button>
    ),
  },
  {
    label: "React (Basic)",
    children: (
      <button
        className="web-sites"
        onClick={() =>
          window.open("https://www.hackerrank.com/certificates/6cafce99e9e4")
        }
      >
        Click to see
      </button>
    ),
  },
  {
    label: "React Testing Library",
    children: (
      <button
        className="web-sites"
        onClick={() =>
          window.open(
            "https://udemy-certificate.s3.amazonaws.com/image/UC-34d16ff7-431f-42b6-84c2-fd160a8d2ea7.jpg"
          )
        }
      >
        Click to see
      </button>
    ),
  },
  {
    label: "Tailwind CSS",
    children: (
      <button
        className="web-sites"
        onClick={() =>
          window.open(
            "https://udemy-certificate.s3.amazonaws.com/image/UC-e613d91b-c686-4895-9b60-dc51db26384c.jpg"
          )
        }
      >
        Click to see
      </button>
    ),
  },
  {
    label: "Java (Basic)",
    children: (
      <button
        className="web-sites"
        onClick={() =>
          window.open("https://www.hackerrank.com/certificates/073dec1b9219")
        }
      >
        Click to see
      </button>
    ),
  },
];

const otherSkillsSet: IconType[] = [
  {
    label: "Java",
    ratingValue: 3,
    children: (
      <FaJava
        className="icon"
        style={{
          background: "#B5651B",
        }}
      />
    ),
  },
  {
    label: "C",
    ratingValue: 2,
    children: <></>,
  },
  {
    label: "CPP",
    ratingValue: 2,
    children: <></>,
  },
  {
    label: "Python",
    ratingValue: 2,
    children: (
      <FaPython
        className="icon"
        style={{
          background: "#F5DA57",
          color: "#35709E",
        }}
      />
    ),
  },
  {
    label: "Flutter",
    ratingValue: 2,
    children: (
      <SiFlutter
        className="icon"
        style={{
          color: "#3DB0CC",
          border: "1px solid #CACCCD",
        }}
      />
    ),
  },
  {
    label: "Android",
    ratingValue: 2,
    children: (
      <AiFillAndroid
        className="icon"
        style={{
          color: "#63B567",
          border: "1px solid #63B567",
        }}
      />
    ),
  },
  {
    label: "Kotlin",
    ratingValue: 2,
    children: (
      <TbBrandKotlin
        className="icon"
        style={{
          color: "#5762D9",
          border: "1px solid #CACCCD",
        }}
      />
    ),
  },
  {
    label: "SQL",
    ratingValue: 2,
    children: (
      <TbBrandMysql
        className="icon"
        style={{
          color: "#0373B6",
          border: "1px solid #CACCCD",
        }}
      />
    ),
  },
];

const frontEndSkillsSet: IconType[] = [
  {
    label: "React",
    ratingValue: 4,
    children: (
      <FaReact
        className="icon"
        style={{
          color: "#3486eb",
          border: "1px solid #CACCCD",
        }}
      />
    ),
  },
  {
    label: "Angular",
    ratingValue: 3,
    children: (
      <FaAngular
        className="icon"
        style={{
          color: "#a11528",
          border: "1px solid #CACCCD",
        }}
      />
    ),
  },
  {
    label: "JavaScript",
    children: (
      <DiJavascript
        className="icon"
        style={{
          color: "#EFD819",
          border: "1px solid #CACCCD",
        }}
      />
    ),
    ratingValue: 5,
  },
  {
    label: "HTML5",
    children: (
      <AiOutlineHtml5
        className="icon"
        style={{
          color: "#DD4B25",
          border: "1px solid #CACCCD",
        }}
      />
    ),
    ratingValue: 5,
  },
  {
    label: "CSS3",
    children: (
      <IoLogoCss3
        className="icon"
        style={{
          color: "#265DE6",
          border: "1px solid #CACCCD",
        }}
      />
    ),
    ratingValue: 4,
  },
  {
    label: "React-Redux",
    children: (
      <SiRedux
        className="icon"
        style={{
          color: "#7348B6",
          border: "1px solid #CACCCD",
        }}
      />
    ),
    ratingValue: 4,
  },
  {
    label: "SASS",
    ratingValue: 3,
    children: (
      <DiSass
        className="icon"
        style={{
          color: "#C66493",
          border: "1px solid #CACCCD",
        }}
      />
    ),
  },
  {
    label: "Tailwindcss",
    ratingValue: 4,
    children: (
      <SiTailwindcss
        className="icon"
        style={{
          color: "#09B0CD",
          border: "1px solid #CACCCD",
        }}
      />
    ),
  },
];

const testingSkillsSet: IconType[] = [
  {
    label: "React Testing Library",
    ratingValue: 3,
    children: (
      <SiTestinglibrary
        className="icon"
        style={{ color: "#D32928", border: "1px solid #CACCCD" }}
      />
    ),
  },
  {
    label: "Jest",
    ratingValue: 3,
    children: (
      <SiJest
        className="icon"
        style={{ color: "#99425B", border: "1px solid #CACCCD" }}
      />
    ),
  },
];

const workDemo: IconType[] = [
  {
    label: "Youtube Clone",
    children: (
      <button
        onClick={() =>
          window.open("https://youtube-clone-by-s.netlify.app/welcome")
        }
        className="web-sites"
      >
        Click here to go website
      </button>
    ),
  },
  {
    label: "Portfolio",
    children: (
      <button
        onClick={() => window.open("https://incredible-portfolio.netlify.app/")}
        className="web-sites"
      >
        Click here to go home
      </button>
    ),
  },
];

const Icon = ({ label, children, ratingValue }: IconType) => {
  return (
    <>
      <div className="icon-set">
        <span>{label}</span>
        {children}
      </div>

      {ratingValue ? (
        <Rating name="read-only" value={ratingValue} disabled />
      ) : null}
    </>
  );
};

const About = () => {
  return (
    <StyledAbout>
      <div className="about-container">
        <div className="about-data">
          <h1>About me</h1>
          <span>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </span>
          <span>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </span>
        </div>
        <div>
          <h1>Skills</h1>
          <div className="skills-container">
            <div>
              <h2>Front-end Skills</h2>
              {frontEndSkillsSet.map(
                ({ label, children, ratingValue }, index) => (
                  <Icon
                    key={`${label}-${index}`}
                    label={label}
                    children={children}
                    ratingValue={ratingValue}
                  />
                )
              )}
            </div>
            <div>
              <h2>Other Skills</h2>
              {otherSkillsSet.map(({ label, children, ratingValue }, index) => (
                <Icon
                  key={`${label}-${index}`}
                  label={label}
                  children={children}
                  ratingValue={ratingValue}
                />
              ))}
            </div>
            <div>
              <h2>Testing Library</h2>
              {testingSkillsSet.map(
                ({ label, children, ratingValue }, index) => (
                  <Icon
                    key={`${label}-${index}`}
                    label={label}
                    children={children}
                    ratingValue={ratingValue}
                  />
                )
              )}
            </div>
          </div>
        </div>

        <div>
          <h1>Work Demo link</h1>
          <div className="work-demo">
            {workDemo.map(({ label, children }, index) => (
              <Icon
                key={`${label}-${index}`}
                label={label}
                children={children}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <img src={avatar} alt="avatar" width={350} className="image" />
        <div className="certifications">
          <h2>Certification: </h2>
          {certificationSet.map(({ label, children }, index) => (
            <Icon key={`${label}-${index}`} label={label} children={children} />
          ))}
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
