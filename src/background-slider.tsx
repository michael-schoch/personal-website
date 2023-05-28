import { useEffect, useState } from "react";
import styled from "styled-components";
import bandw from "./img/bandw.jpg";
import color from "./img/color.jpg";
import leftRight from "./img/left-right-circle.svg";

interface ForegroundProps {
  sliderval: number;
}

interface ImgContainerProps {
  img: string;
  height: string | null;
}

interface AppConProps {
  height: string | null;
}

export const BackgroundSlider = () => {
  const [sliderVal, setSliderVal] = useState(50);

  const handleChange = (evt: any) => {
    setSliderVal(evt.target.value);
  };

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
    <SliderContainer height={height}>
      <Background>
        <JobTitle>Software Engineer</JobTitle>
        <ImgContainer height={height} img={bandw} />
      </Background>
      <Foreground sliderval={sliderVal}>
        <JobTitle>User Experience Designer</JobTitle>
        <ImgContainer height={height} img={color} />
      </Foreground>
      <Slider
        type="range"
        min={0}
        max={100}
        value={sliderVal}
        onChange={(evt: any) => handleChange(evt)}
      ></Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div<AppConProps>`
  width: 100vw;
  height: ${(props) => (props.height !== null ? props.height : "100vh")};
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding-bottom: 100px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`;

const Foreground = styled(Background)<ForegroundProps>`
  width: ${(props) => props.sliderval}%;
`;

const ImgContainer = styled.div<ImgContainerProps>`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: ${(props) => (props.height !== null ? props.height : "100vh")};
`;

const JobTitle = styled.div`
  position: absolute;
  top: 62vh;
  left: 50vw;
  width: 185px;
  color: white;
  font-size: 24px;
`;

const Slider = styled.input`
  position: absolute;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  background: #f2f2f200;
  outline: none;
  margin: 0;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #f2f2f200;
  }
  &::-webkit-slider-thumb {
    appearance: none;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    display: flex;
    background-image: url(${leftRight});
    background-position: center;
    cursor: pointer;
  }
`;
