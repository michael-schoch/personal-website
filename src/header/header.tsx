import logo from "../img/logo.svg";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Menu } from "../img/bars-solid.svg";
import { useState } from "react";
import { NAVIGATION_HEIGHT } from "../helpers/constants";

interface MenuDrawerProps {
  $isOpen: boolean;
}

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <HeaderContainer>
      <StyledMenu onClick={() => handleMenuOpen()} />
      <LogoContainer>
        <NavLink to="/" onClick={() => handleClose()}>
          <Logo src={logo} />
        </NavLink>
      </LogoContainer>
      <Link to="/contact">
        <ContactButton>Contact</ContactButton>
      </Link>
      <MenuDrawer $isOpen={open}>
        <StyledLink to="/" onClick={() => handleClose()}>
          Home
        </StyledLink>
        <StyledLink to="about" onClick={() => handleClose()}>
          About Mike
        </StyledLink>
        <StyledLink to="resume" onClick={() => handleClose()}>
          Résumé
        </StyledLink>
        <StyledLink to="/contact" onClick={() => handleClose()}>
          Contact
        </StyledLink>
      </MenuDrawer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #12274a;
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
  z-index: 2;
  display: flex;
`;

const MenuDrawer = styled.div<MenuDrawerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.$isOpen ? "100vw" : "0")};
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
  height: ${NAVIGATION_HEIGHT};
  background: #cf1e51;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 10px 10px;
  z-index: 2;
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

const ContactButton = styled.button`
  padding: 16px;
  border: none;
  color: #ffffff;
  background-color: #cf1e51;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
