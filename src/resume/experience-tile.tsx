import styled from "styled-components";

type ExperienceTileProps = {
  company: string;
  dateRange: string;
  jobTitle: string;
  content: string | JSX.Element;
};

export const ExperienceTile = ({
  company,
  dateRange,
  jobTitle,
  content,
}: ExperienceTileProps) => {
  return (
    <Container>
      <Company>{company}</Company>
      <JobInfo>
        <div>{dateRange}</div>
        <div>{jobTitle}</div>
      </JobInfo>
      <Content>{content}</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

const Company = styled.h3`
  margin: 0;
`;

const JobInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  font-size: 12px;
`;

const Content = styled.p`
  margin: 0;
  font-size: 14px;
`;
