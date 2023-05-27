import styled from 'styled-components'
import portrait from './portrait.png'
import bandw from './img/bandw.jpg'
import color from './img/color.jpg'
import { useState } from 'react';

interface ForegroundProps {
  sliderval: number
}

function App() {
  const [sliderVal, setSliderVal] = useState(50)

  const handleChange = (evt: any) => {
    console.log(evt.target.value)
    setSliderVal(evt.target.value)
  }

  return (
    <AppContainer>
      <Container>
        <Float>I AM A</Float>
        <Header>
          <Link href='mike'>About Mike</Link>
          <Link href='resume'>Resume</Link>
          <Title>Michael Schoch</Title>
          <Link href='#'>Portfolio</Link>
          <Link href='#'>Contact</Link>
        </Header>
      </Container>
      <SliderContainer>
          <Background>
            <Text>Software Engineer</Text>
            <ForegroundImg src={bandw} />
          </Background>
          <Foreground sliderval={sliderVal}>
            <Text>User Experience Designer</Text>
            <ForegroundImg src={color} />
          </Foreground>
        <Slider type='range' min={0} max={100} value={sliderVal} onChange={(evt: any) => handleChange(evt)} ></Slider>
      </SliderContainer>
    </AppContainer>
  );
}

// const SlideLine = styled.div<ForegroundProps>`
//   position: absolute;
//   left: ${props => props.sliderval}%;
//   width: 6px;
//   height: 100vh;
//   background-color: white;

// `
const Float = styled.div`
position: absolute;
top: 55vh;
left: 45vw;
width: 200px;
color: white;
font-size: 36px;
`

const Text = styled.div`
  position: absolute;
  top: 50vh;
  left: 50vw;
  width: 200px;
  color: white;
  font-size: 24px;
`

const Container = styled.div`
  height: 100px;
  width: 100vw;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  background-color: #12274A;
`


const SliderContainer = styled.div`
  width: 100vw;
  height: 80%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 100px;
`

const Background = styled.div`
  // background-image: url(${bandw});
  // background-size: cover;
  // background-position: center;
  position: absolute;
    top: 100px;
    left: 0;
    overflow: hidden;

`

const Foreground = styled.div<ForegroundProps>`
  width: ${(props) => props.sliderval}%;
  position: absolute;
  top: 100px;
  left: 0;
  overflow: hidden;
`

const ForegroundImg = styled.img`
// background-image: url(${color});
// background-size: cover;
// background-position: center;
// position: absolute;
//   top: 0;
//   left: 0;
// right: 0;
// bottom: 0;
// margin: auto;
width: 100vw;
  object-fit: cover;
  object-position: center;
`

const Slider = styled.input`
  position: absolute;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  background: #f2f2f200;
  outline: none;
  margin: 0;
  transition: all .2s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #f2f2f200;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 6px;
    height: 100px;
    display: flex;
    background: white;
    cursor: pointer;
  }
`

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
