import styled from "styled-components";

export const Education = () => {
  return (
    <Container>
      <School>Loyola University Chicago</School>
      <Dates>August 2009 – May 2013</Dates>
      <Content>
        <li>
          Double majored in Visual Communication and Advertising/Public
          Relations
        </li>
        <li>Graduated as a member of Loyola Honors Program</li>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

const School = styled.h4`
  margin: 0;
`;

const Dates = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  font-size: 12px;
`;

const Content = styled.ul`
  margin: 0;
  font-size: 14px;
  padding-left: 12px;
`;
