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
}

interface ITech {
  label?: string;
  keyTechOrDescription?: string;
}

interface IWorkType {
  projectName?: string;
  keyRole?: string;
  techStack?: ITech[];
  describtion?: ITech[];
}

const otherSkillsSet: IconType[] = [
  {
    label: "Java",
    ratingValue: 3,
    children: (
      <FaJava
        style={{
          marginRight: "1rem",
          marginLeft: "0.5rem",
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
      <FaPython style={{ marginRight: "1rem", marginLeft: "0.5rem" }} />
    ),
  },
  {
    label: "Flutter",
    ratingValue: 2,
    children: (
      <SiFlutter style={{ marginLeft: "0.5rem", marginRight: "1rem" }} />
    ),
  },
  {
    label: "Android",
    ratingValue: 2,
    children: (
      <AiFillAndroid style={{ marginRight: "1rem", marginLeft: "0.5rem" }} />
    ),
  },
  {
    label: "Kotlin",
    ratingValue: 2,
    children: (
      <TbBrandKotlin style={{ marginRight: "1rem", marginLeft: "0.5rem" }} />
    ),
  },
  {
    label: "SQL",
    ratingValue: 2,
    children: (
      <TbBrandMysql style={{ marginRight: "1rem", marginLeft: "0.5rem" }} />
    ),
  },
];

const frontEndSkillsSet: IconType[] = [
  {
    label: "React",
    ratingValue: 4,
    children: (
      <FaReact
        style={{
          color: "#3486eb",
          marginRight: "1rem",
          marginLeft: "0.5rem",
        }}
      />
    ),
  },
  {
    label: "Angular",
    ratingValue: 3,
    children: (
      <FaAngular
        style={{
          color: "#a11528",
          marginRight: "1rem",
          marginLeft: "0.5rem",
        }}
      />
    ),
  },
  {
    label: "JavaScript",
    children: (
      <DiJavascript
        style={{
          color: "#EFD819",
          marginRight: "1rem",
          marginLeft: "0.5rem",
        }}
      />
    ),
    ratingValue: 5,
  },
  {
    label: "HTML5",
    children: (
      <AiOutlineHtml5
        style={{
          color: "#DD4B25",
          marginRight: "1rem",
          marginLeft: "0.5rem",
        }}
      />
    ),
    ratingValue: 5,
  },
  {
    label: "CSS3",
    children: (
      <IoLogoCss3
        style={{
          color: "#265DE6",
          marginRight: "1rem",
          marginLeft: "0.5rem",
        }}
      />
    ),
    ratingValue: 4,
  },
  {
    label: "React-Redux",
    children: (
      <SiRedux
        style={{
          color: "#7348B6",
          marginRight: "1rem",
          marginLeft: "0.5rem",
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
        style={{
          color: "#C66493",
          marginRight: "1rem",
          marginLeft: "0.5rem",
        }}
      />
    ),
  },
  {
    label: "Tailwindcss",
    ratingValue: 4,
    children: (
      <SiTailwindcss
        style={{
          color: "#09B0CD",
          marginRight: "1rem",
          marginLeft: "0.5rem",
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
        style={{ color: "#D32928", marginLeft: "0.5rem", marginRight: "1rem" }}
      />
    ),
  },
  {
    label: "Jest",
    ratingValue: 3,
    children: (
      <SiJest
        style={{ color: "#99425B", marginLeft: "0.5rem", marginRight: "1rem" }}
      />
    ),
  },
];

const workDemo: IconType[] = [
  {
    label: "Youtube Clone",
    children: (
      <a
        href="https://candid-baklava-3e5961.netlify.app/welcome"
        className="web-sites"
      >
        click here to go website
      </a>
    ),
  },
];

const workExperienceSet: IWorkType[] = [
  {
    projectName: "Great Minds Affirm In-sync",
    keyRole: "Front-end Developer",
    techStack: [
      { label: "React", keyTechOrDescription: "React" },
      { label: "Tailwind CSS", keyTechOrDescription: "Tailwind CSS" },
      { label: "React Context API", keyTechOrDescription: "React Context API" },
      { label: "TypeScript", keyTechOrDescription: "TypeScript" },
      { label: "Styled-components", keyTechOrDescription: "Styled-components" },
    ],
    describtion: [
      { label: "Implementing functionality using React with TypeScript" },
      {
        label: "Develop Reusable Components",
      },
      {
        label: "Writing Unit Testing Using React Testing Library",
      },
      {
        label: "Work on fixing bugs",
      },
      {
        label: "Helping team members and being a team Player.",
      },
    ],
  },
  {
    projectName: "Rockwell Automation",
    keyRole: "Front-end Developer",
    techStack: [
      { label: "React", keyTechOrDescription: "React" },
      { label: "Material UI", keyTechOrDescription: "Material UI" },
      { label: "React Redux", keyTechOrDescription: "React Redux" },
      { label: "TypeScript", keyTechOrDescription: "TypeScript" },
      { label: "React-Form-Hook", keyTechOrDescription: "React-Form-Hokk" },
      { label: "Thunk (Middleware)", keyTechOrDescription: "Thunk" },
    ],
    describtion: [
      { label: "Design and Develop UI using React with TypeScript and Redux" },
      {
        label:
          "Implement reusable Input fields to maintain similarity on the UI end",
      },
      {
        label:
          "Implement API Integration via Redux, using middleware Thunk, and display data in Front-End",
      },
      { label: "Work on bug-fixing" },
      {
        label:
          "Helping my fellow colleagues to debug their code to resolve unwanted errors",
      },
    ],
  },
];

const WorkContainer = ({
  projectName,
  keyRole,
  techStack,
  describtion,
}: IWorkType) => (
  <div className="container" key={projectName} aria-label={projectName}>
    <h2>Project Name: {projectName}</h2>
    <h2>Role: {keyRole}</h2>
    <div>
      <h2>Tech Stack: </h2>
      {techStack?.map(({ label }) => (
        <span> {label},</span>
      ))}
    </div>
    <div>
      <h2>Key Role:</h2>
      {describtion?.map(({ label }, index) => (
        <div key={index} className="describtion">
          {label}
        </div>
      ))}
    </div>
  </div>
);

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
            I'm very ambitious fron-end developer looking for a role in
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
              <h2>Frond-end Skills</h2>
              {frontEndSkillsSet.map(({ label, children, ratingValue }) => (
                <Icon
                  label={label}
                  children={children}
                  ratingValue={ratingValue}
                />
              ))}
            </div>
            <div>
              <h2>Other Skills</h2>
              {otherSkillsSet.map(({ label, children, ratingValue }) => (
                <Icon
                  label={label}
                  children={children}
                  ratingValue={ratingValue}
                />
              ))}
            </div>
            <div>
              <h2>Testing Library</h2>
              {testingSkillsSet.map(({ label, children, ratingValue }) => (
                <Icon
                  label={label}
                  children={children}
                  ratingValue={ratingValue}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h1>Work Demo link</h1>
          <div className="skills-container">
            {workDemo.map(({ label, children }) => (
              <Icon label={label} children={children} />
            ))}
          </div>
        </div>

        <div>
          <h1>Work Experience</h1>
          <div className="work-container">
            {workExperienceSet.map(
              ({ projectName, keyRole, techStack, describtion }) => (
                <WorkContainer
                  projectName={projectName}
                  keyRole={keyRole}
                  techStack={techStack}
                  describtion={describtion}
                />
              )
            )}
          </div>
        </div>
      </div>
      <img src={avatar} alt="avatar" className="image" />
    </StyledAbout>
  );
};

export default About;
