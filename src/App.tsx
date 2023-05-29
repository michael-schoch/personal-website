import styled from "styled-components";
import { Menu } from "./header/menu";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppContainer>
        <Menu />
      </AppContainer>
    </Router>
  );
}

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
