import React from "react";
import { IWorkType } from "../interfaces/Common";

const WorkContainer = ({
  projectName,
  keyRole,
  techStack,
  describtion,
}: IWorkType) => {
  return (
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
};

export default WorkContainer;
