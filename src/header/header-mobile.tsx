import logo from "../img/logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Menu } from "../img/bars-solid.svg";
import { useState } from "react";

interface MenuDrawerProps {
  isOpen: boolean;
}

export const HeaderMobile = () => {
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Header>
      <StyledMenu onClick={() => handleMenuOpen()} />
      <LogoContainer>
        <NavLink to="/">
          <Logo src={logo} />
        </NavLink>
      </LogoContainer>
      <MenuDrawer isOpen={open}>
        <StyledLink to="/" onClick={() => handleClose()}>
          Home
        </StyledLink>
        <StyledLink to="about" onClick={() => handleClose()}>
          About Mike
        </StyledLink>
        <StyledLink to="resume" onClick={() => handleClose()}>
          Resume
        </StyledLink>
        <StyledLink to="/portfolio" onClick={() => handleClose()}>
          Portfolio
        </StyledLink>
        <StyledLink to="/contact" onClick={() => handleClose()}>
          Contact
        </StyledLink>
      </MenuDrawer>
    </Header>
  );
};

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #12274a;
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    display: flex;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MenuDrawer = styled.div<MenuDrawerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.isOpen ? "100vw" : "0")};
  height: 100vh;
  background-color: #12274a;
  transition: width 0.5s;
  z-index: 1;
  padding-top: 140px;
  overflow: hidden;
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
  z-index: 2;
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
  margin: 16px 16px;
  padding: 8px;
  &.active {
    background-color: #cf1e51;
    border-radius: 4px;
  }
`;

const StyledMenu = styled(Menu)`
  width: 32px;
  fill: #ffffff;
  display: flex;
  position: absolute;
  left: 16px;
  cursor: pointer;
  z-index: 2;
`;
