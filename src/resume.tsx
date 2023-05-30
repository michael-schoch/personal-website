import styled, { css, keyframes } from "styled-components";
import { ReactComponent as Plus } from "./img/plus-solid.svg";
import { ReactComponent as Minus } from "./img/minus-solid.svg";
import { useState } from "react";

interface CollapsableSectionProps {
  $isOpen: boolean;
}

export const Resume = () => {
  const [skillsOpen, setSkillsOpen] = useState(true);
  const [expOpen, setExpOpen] = useState(true);
  const [recogOpen, setRecogOpen] = useState(true);
  const [eduOpen, setEduOpen] = useState(true);

  const handleSectionClick = (str: string) => {
    if (str === "skill") {
      setSkillsOpen(!skillsOpen);
    }
    if (str === "exp") {
      setExpOpen(!expOpen);
    }
    if (str === "recog") {
      setRecogOpen(!recogOpen);
    }
    if (str === "edu") {
      setEduOpen(!eduOpen);
    }
  };

  return (
    <PortfolioContainer>
      <SidePanel></SidePanel>
      <CollapsableSection>
        <SecHeader>
          <SectionTitle>Skills</SectionTitle>
          {skillsOpen ? (
            <StyledMinus onClick={() => handleSectionClick("skill")} />
          ) : (
            <StyledPlus onClick={() => handleSectionClick("skill")} />
          )}
        </SecHeader>
        <CollapsableContent $isOpen={skillsOpen}>
          JavaScript TypeScript React HTML/CSS CSS in JS Storybook PostgreSQL
          Node Webpack Redux
        </CollapsableContent>
      </CollapsableSection>
      <CollapsableSection>
        <SecHeader>
          <SectionTitle>Experience</SectionTitle>
          {expOpen ? (
            <StyledMinus onClick={() => handleSectionClick("exp")} />
          ) : (
            <StyledPlus onClick={() => handleSectionClick("exp")} />
          )}
        </SecHeader>
        <CollapsableContent $isOpen={expOpen}>
          JavaScript TypeScript React HTML/CSS CSS in JS Storybook PostgreSQL
          Node Webpack Redux
        </CollapsableContent>
      </CollapsableSection>
      <CollapsableSection>
        <SecHeader>
          <SectionTitle>Recognition</SectionTitle>
          {recogOpen ? (
            <StyledMinus onClick={() => handleSectionClick("recog")} />
          ) : (
            <StyledPlus onClick={() => handleSectionClick("recog")} />
          )}
        </SecHeader>
        <CollapsableContent $isOpen={recogOpen}>
          JavaScript TypeScript React HTML/CSS CSS in JS Storybook PostgreSQL
          Node Webpack Redux
        </CollapsableContent>
      </CollapsableSection>
      <CollapsableSection>
        <SecHeader>
          <SectionTitle>Education</SectionTitle>
          {eduOpen ? (
            <StyledMinus onClick={() => handleSectionClick("edu")} />
          ) : (
            <StyledPlus onClick={() => handleSectionClick("edu")} />
          )}
        </SecHeader>
        <CollapsableContent $isOpen={eduOpen}>
          JavaScript TypeScript React HTML/CSS CSS in JS Storybook PostgreSQL
          Node Webpack Redux
        </CollapsableContent>
      </CollapsableSection>
    </PortfolioContainer>
  );
};

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 32px 0 0 0;
  box-sizing: border-box;
`;

const SidePanel = styled.div``;

const CollapsableSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SecHeader = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;

  background-color: #12274a;
  justify-content: space-between;
  margin-bottom: 1px;
  postion: relative;
`;

const SectionTitle = styled.h2`
  width: 100%;
  max-width: 800px;
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
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  // transition: height 0.5s;
`;
