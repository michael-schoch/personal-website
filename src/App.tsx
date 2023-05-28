import styled from "styled-components";
import { BackgroundSlider } from "./background-slider";
import { Menu } from "./menu";

function App() {
  return (
    <AppContainer>
      <Float>I AM A</Float>
      <Menu />
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

export default App;
