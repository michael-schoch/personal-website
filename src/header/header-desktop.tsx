import logo from "../img/logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NAVBAR_HEIGHT, NAVIGATION_HEIGHT } from "../helpers/constants";

export const HeaderDesktop = () => {
  return (
    <Header>
      <StyledLink to="about">About Mike</StyledLink>
      <StyledLink to="resume">Resume</StyledLink>
      <Title>Michael Schoch</Title>
      <LogoContainer>
        <NavLink to="/">
          <Logo src={logo} />
        </NavLink>
      </LogoContainer>
      <StyledLink to="/portfolio">Portfolio</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Header>
  );
};

const Header = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  height: ${NAVBAR_HEIGHT};
  background-color: #12274a;
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
  display: none;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Logo = styled.img`
  width: 100px;
  display: flex;
  margin-top: 25px;
`;

const LogoContainer = styled.div`
  width: 120px;
  height: ${NAVIGATION_HEIGHT};
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

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  text-align: center;
  margin: 0 16px;
  padding: 8px;
  &.active {
    border-bottom: 2px solid #cf1e51;
  }
`;