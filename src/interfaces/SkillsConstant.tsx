import { IconType, IWorkDetails, SkillProps } from "./Common";
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

export const frontEndSkillsSet: IconType[] = [
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

export const otherSkillsSet: IconType[] = [
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

export const testingSkillsSet: IconType[] = [
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

export const workDemo: IconType[] = [
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
    label: "Chat Application",
    children: (
      <button
        className="web-sites"
        onClick={() => window.open("https://chat-app-0tol.onrender.com/")}
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

export const CertificationSet: IconType[] = [
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

export const SkillSets: SkillProps[] = [
  {
    label: "Front-end Skills",
    skillList: frontEndSkillsSet,
  },
  {
    label: "Other Skills",
    skillList: otherSkillsSet,
  },
  {
    label: "Testing Library",
    skillList: testingSkillsSet,
  },
];

export const WorkDemoList = [
  {
    label: "Work Demo Links",
    skillList: workDemo,
  },
];

export const workExperienceSet: IWorkDetails[] = [
  {
    companyName: "Globant Ind Pvt LTD.",
    workType: [
      {
        projectName: "Great Minds Affirm In-sync",
        keyRole: "Front-end Developer",
        techStack: [
          { label: "React", keyTechOrDescription: "React" },
          { label: "Tailwind CSS", keyTechOrDescription: "Tailwind CSS" },
          {
            label: "React Context API",
            keyTechOrDescription: "React Context API",
          },
          { label: "TypeScript", keyTechOrDescription: "TypeScript" },
          {
            label: "Styled-components",
            keyTechOrDescription: "Styled-components",
          },
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
          {
            label:
              "Design and Develop UI using React with TypeScript and Redux",
          },
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
    ],
  },
];
