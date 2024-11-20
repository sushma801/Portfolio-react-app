import { ReactNode } from "react";

export interface IconType {
  label: string;
  children: ReactNode;
  ratingValue?: number;
  openLink?: () => void;
}

export interface SkillProps {
  label: string;
  skillList: IconType[];
}

export interface ITech {
  label?: string;
  keyTechOrDescription?: string;
}

export interface IWorkType {
  projectName?: string;
  keyRole?: string;
  techStack?: ITech[];
  describtion?: ITech[];
}
export interface IWorkDetails {
  companyName: String;
  workType: IWorkType[];
}
