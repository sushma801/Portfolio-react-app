import avatar from "../assets/avatar.webp";
import { StyledAbout } from "./About.styled";
import SkillList from "../utilities/SkillList";
import {
  CertificationSet,
  SkillSets,
  WorkDemoList,
} from "../interfaces/SkillsConstant";
import Icon from "../utilities/Icon";

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
            {SkillSets.map(({ label, skillList }, index) => (
              <SkillList
                label={label}
                skillList={skillList}
                key={`${label}-${index}`}
              />
            ))}
          </div>
        </div>

        {WorkDemoList.map(({ label, skillList }, index) => (
          <SkillList
            label={label}
            skillList={skillList}
            key={`${label}-${index}`}
          />
        ))}
      </div>
      <div>
        <img src={avatar} alt="avatar" width={350} className="image" />
        <div className="certifications">
          <h2>Certification: </h2>
          {CertificationSet.map(({ label, children }, index) => (
            <Icon key={`${label}-${index}`} label={label} children={children} />
          ))}
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
