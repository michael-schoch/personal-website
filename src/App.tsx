import styled from "styled-components";
import { Menu } from "./header/menu";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";

interface AppConProps {
  height: string | null;
}

function App() {
  const [height, setHeight] = useState<string | null>(null);

  const handleMobileHeight = () => {
    const deviceWidth = window.matchMedia("(max-width: 1024px)");

    if (deviceWidth.matches) {
      setHeight(`${window.innerHeight}px`);
    }
  };

  useEffect(() => {
    handleMobileHeight();
  }, []);

  return (
    <Router>
      <AppContainer height={height}>
        <Float>I AM A</Float>
        <Menu />
      </AppContainer>
    </Router>
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

const AppContainer = styled.div<AppConProps>`
  height: ${(props) => (props.height !== null ? props.height : "100vh")};
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export default App;
