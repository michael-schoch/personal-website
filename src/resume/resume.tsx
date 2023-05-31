import styled from "styled-components";
import { ReactComponent as Plus } from "../img/plus-solid.svg";
import { ReactComponent as Minus } from "../img/minus-solid.svg";
import { useState } from "react";
import { ExperienceList } from "./experience-list";
import { SkillsList } from "./skills-list";
import { NAVBAR_HEIGHT } from "../helpers/constants";
import { RecognitionList } from "./recognition-list";
import { Education } from "./education";

interface CollapsableSectionProps {
  $isOpen: boolean;
}

const SKILL = "skill";
const EXPERIENCE = "exp";
const RECOGNITION = "recog";
const EDUCATION = "edu";

export const Resume = () => {
  const [skillsOpen, setSkillsOpen] = useState(true);
  const [expOpen, setExpOpen] = useState(true);
  const [recogOpen, setRecogOpen] = useState(true);
  const [eduOpen, setEduOpen] = useState(true);

  const handleSectionClick = (str: string) => {
    switch (str) {
      case SKILL:
        setSkillsOpen(!skillsOpen);
        break;
      case EXPERIENCE:
        setExpOpen(!expOpen);
        break;
      case RECOGNITION:
        setRecogOpen(!recogOpen);
        break;
      case EDUCATION:
        setEduOpen(!eduOpen);
        break;
      default:
        break;
    }
  };

  return (
    <ResumeContainer>
      <ScrollHide />
      <Title>Résumé</Title>
      <CollapsableSection>
        <SecHeader>
          <SectionTitle>Skills</SectionTitle>
          {skillsOpen ? (
            <StyledMinus onClick={() => handleSectionClick(SKILL)} />
          ) : (
            <StyledPlus onClick={() => handleSectionClick(SKILL)} />
          )}
        </SecHeader>
        <CollapsableContent $isOpen={skillsOpen}>
          <SkillsList />
        </CollapsableContent>
      </CollapsableSection>
      <CollapsableSection>
        <SecHeader>
          <SectionTitle>Experience</SectionTitle>
          {expOpen ? (
            <StyledMinus onClick={() => handleSectionClick(EXPERIENCE)} />
          ) : (
            <StyledPlus onClick={() => handleSectionClick(EXPERIENCE)} />
          )}
        </SecHeader>
        <CollapsableContent $isOpen={expOpen}>
          <ExperienceList />
        </CollapsableContent>
      </CollapsableSection>
      <CollapsableSection>
        <SecHeader>
          <SectionTitle>Recognition</SectionTitle>
          {recogOpen ? (
            <StyledMinus onClick={() => handleSectionClick(RECOGNITION)} />
          ) : (
            <StyledPlus onClick={() => handleSectionClick(RECOGNITION)} />
          )}
        </SecHeader>
        <CollapsableContent $isOpen={recogOpen}>
          <RecognitionList />
        </CollapsableContent>
      </CollapsableSection>
      <CollapsableSection>
        <SecHeader>
          <SectionTitle>Education</SectionTitle>
          {eduOpen ? (
            <StyledMinus onClick={() => handleSectionClick(EDUCATION)} />
          ) : (
            <StyledPlus onClick={() => handleSectionClick(EDUCATION)} />
          )}
        </SecHeader>
        <CollapsableContent $isOpen={eduOpen}>
          <Education />
        </CollapsableContent>
      </CollapsableSection>
    </ResumeContainer>
  );
};

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 40px 0 0 0;
  box-sizing: border-box;
`;

const ScrollHide = styled.div`
  background-color: #ffffff;
  height: 40px;
  width: 100%;
  z-index: 1;
  display: flex;
  position: fixed;
  top: ${NAVBAR_HEIGHT};
`;

const Title = styled.h1`
  margin-top: 0;
`;

const CollapsableSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const SecHeader = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;

  background-color: #12274a;
  justify-content: space-between;
  margin-bottom: 1px;
  position: sticky;
  top: 120px;
`;

const SectionTitle = styled.h2`
  width: 100%;
  padding: 16px;
  color: white;
  margin: 0;
  font-size: 24px;
`;

const StyledPlus = styled(Plus)`
  fill: #ffffff;
  height: 24px;
  padding: 16px;
`;

const StyledMinus = styled(Minus)`
  fill: #ffffff;
  height: 24px;
  padding: 16px;
`;

const CollapsableContent = styled.div<CollapsableSectionProps>`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
