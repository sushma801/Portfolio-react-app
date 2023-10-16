import React from "react";
import { StyledExperience } from "./Experience.style";

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
interface IWorkDetails {
  companyName: String;
  workType: IWorkType[];
}

const workExperienceSet: IWorkDetails[] = [
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

const WorkContainer = ({
  projectName,
  keyRole,
  techStack,
  describtion,
}: IWorkType) => (
  <div className="container" key={projectName} aria-label={projectName}>
    <h3>Project Name: {projectName}</h3>
    <h3>Role: {keyRole}</h3>
    <div>
      <h3>Tech Stack: </h3>
      {techStack?.map(({ label }, index) => (
        <span key={`${index}-${index}`}> {label},</span>
      ))}
    </div>
    <div>
      <h3>Key Role:</h3>
      <ul>
        {describtion?.map(({ label }, index) => (
          <li key={`${label}-${index}`} className="describtion">
            {label}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  return (
    <StyledExperience>
      <h1>Work Experience</h1>
      <div className="work-container">
        {workExperienceSet.map(({ companyName, workType }) => (
          <>
            <h2>Company Name: {companyName}</h2>
            {workType.map(
              ({ projectName, keyRole, techStack, describtion }, index) => (
                <WorkContainer
                  key={`${projectName}-${index}`}
                  projectName={projectName}
                  keyRole={keyRole}
                  techStack={techStack}
                  describtion={describtion}
                />
              )
            )}
          </>
        ))}
      </div>
    </StyledExperience>
  );
};

export default Experience;
