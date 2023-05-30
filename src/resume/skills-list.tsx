import styled from "styled-components";

export const SkillsList = () => {
  return (
    <>
      <SkillsSubHead>Software Development</SkillsSubHead>
      <SkillsContent>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>HTML/CSS</li>
          <li>CSS in JS</li>
          <li>Storybook</li>
          <li>PostgreSQL</li>
          <li>Node</li>
          <li>Webpack</li>
          <li>Redux</li>
        </ul>
        <ul>
          <li>GraphQL</li>
          <li>TypeORM</li>
          <li>Docker</li>
          <li>Jest</li>
          <li>RTL</li>
          <li>MochaJS</li>
          <li>Cypress</li>
          <li>TDD</li>
          <li>Lean</li>
          <li>Scrum</li>
        </ul>
      </SkillsContent>
      <SkillsSubHead>User Experience</SkillsSubHead>
      <SkillsContent>
        <ul>
          <li>Experience Design</li>
          <li>Interface Design</li>
          <li>Adobe Creative Suite</li>
          <li>Sketch</li>
          <li>User Research</li>
        </ul>
        <ul>
          <li>User Testing</li>
          <li>Video Editing</li>
          <li>Motion Graphics</li>
          <li>Presentation & Client Interaction</li>
        </ul>
      </SkillsContent>
    </>
  );
};

const SkillsSubHead = styled.h3`
  margin-bottom: 0;
`;

const SkillsContent = styled.div`
  display: flex;

  ul {
    margin: 16px;
    padding-left: 16px;
    width: 190px;
  }

  @media screen and (max-width: 500px) {
    ul {
      width: 100%;
    }
  }
`;
