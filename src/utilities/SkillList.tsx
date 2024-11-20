import React, { ReactNode } from "react";
import Icon from "./Icon";

interface IconType {
  label: string;
  children: ReactNode;
  ratingValue?: number;
  openLink?: () => void;
}

interface SkillProps {
  label: string;
  skillList: IconType[];
}

const SkillList = ({ label, skillList }: SkillProps) => {
  return (
    <div>
      <h2>{label}</h2>
      {skillList.map(({ label, children, ratingValue }, index) => (
        <Icon
          key={`${label}-${index}`}
          label={label}
          children={children}
          ratingValue={ratingValue}
        />
      ))}
    </div>
  );
};

export default SkillList;
