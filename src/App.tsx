import styled from "styled-components";
import { BackgroundSlider } from "./background-slider";

function App() {
  return (
    <AppContainer>
      <Float>I AM A</Float>
      <Header>
        <Link href="mike">About Mike</Link>
        <Link href="resume">Resume</Link>
        <Title>Michael Schoch</Title>
        <Link href="#">Portfolio</Link>
        <Link href="#">Contact</Link>
      </Header>
      <BackgroundSlider />
    </AppContainer>
  );
}

const Float = styled.div`
  position: absolute;
  top: 55vh;
  left: 45vw;
  width: 200px;
  color: white;
  font-size: 36px;
  z-index: 1;
`;

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #12274a;
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  display: flex;
  color: white;
  margin: 0 16px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  text-align: center;
  margin: 0 16px;
`;

export default App;
