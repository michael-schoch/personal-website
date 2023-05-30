import styled from "styled-components";

export const RecognitionList = () => {
  return (
    <StyledUL>
      <li>2x Aviture Challenge Coin</li>
      <li>3x Gallup All-Star </li>
      <li>Gallup.com Redesign Award</li>
      <li>Loyola Margaret Daegnais Design Award</li>
      <li>AIGA Loyola co-founder</li>
      <li>Loyola Honors Graduate</li>
    </StyledUL>
  );
};

const StyledUL = styled.ul`
  margin: 16px;
`;
