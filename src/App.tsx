import styled from 'styled-components'
import portrait from './portrait.png'

function App() {
  return (
    <AppContainer>
      <Header>
        <Link href='#'>About Mike</Link>
        <Link href='#'>Resume</Link>
        <Portrait src={portrait}/>
        <Link href='#'>Portfolio</Link>
        <Link href='#'>Contact</Link>
      </Header>
      <Title>Michael Schoch</Title>
      <Subheader>Software Enginer / User Experience</Subheader>

    </AppContainer>
  );
}

const AppContainer = styled.div`
 height: 100vh;
 background-color: #241E4E;
 display: flex;
 width: 100%;
 justify-content: center;
 flex-direction: column;
 align-items: center;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
`

const Portrait = styled.img`
  width: 200px;
  height: 200px;
`

const Title = styled.h1`
  display: flex;
  color: white;
`

const Subheader = styled.h2`
  display: flex;
  color: white;
  margin: 0
`

const Link = styled.a`
  color: white;
  text-decoration: none;
`

export default App;
