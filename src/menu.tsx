import styled from "styled-components";
import logo from "./img/logo.svg";

export const Menu = () => {
  return (
    <Header>
      <StyledLink href="mike">About Mike</StyledLink>
      <StyledLink href="resume">Resume</StyledLink>
      <Title>Michael Schoch</Title>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <StyledLink href="#">Portfolio</StyledLink>
      <StyledLink href="#">Contact</StyledLink>
    </Header>
  );
};

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #12274a;
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 100px;
  display: flex;
  margin-top: 25px;
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 120px;
  background: #cf1e51;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 10px 10px;
`;

const Title = styled.h1`
  display: none;
  color: white;
  margin: 0 16px;
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  text-align: center;
  margin: 0 16px;
`;
