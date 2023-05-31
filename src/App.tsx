import styled from "styled-components";
import { Menu } from "./header/menu";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./helpers/scroll-to-top";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContainer>
        <Menu />
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default App;
