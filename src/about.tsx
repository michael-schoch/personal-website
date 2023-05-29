import styled from "styled-components";
import headshot from "./img/headshot.png";
import { NAVIGATION_HEIGHT } from "./helpers/constants";
import son from "./img/mike-and-miles.jpg";
import family from "./img/family.jpg";
import hockey from "./img/hockey.jpg";

export const About = () => {
  return (
    <AboutContainer>
      <StyledHeadshot src={headshot} />
      <Title>About Mike</Title>
      <Content>
        <p>
          Thanks for visiting my site! My name is Mike Schoch and I am a
          dedicated father, a self-taught software engineer, and a passionate UX
          designer. Throughout my career, I have had the opportunity to work on
          various projects that blend my love for creating interesting and
          intuitive software through problem-solving, collaboration, and
          technical knowledge.
        </p>
        <p>
          One thing that excites me about coming to work each day is
          collaborating with exceptional individuals in dynamic and cooperative
          environments. I strongly believe that great minds working together can
          achieve remarkable results. I find immense satisfaction in tackling
          challenges alongside talented teams, where ideas flourish and
          innovation thrives.
        </p>
        <p>
          In addition to my professional pursuits, I am an avid learner who
          constantly seeks to broaden my horizons. I enjoy acquiring new skills
          and knowledge, as they empower me to grow both personally and
          professionally. Recently, I have delved into three exceptional
          technical books: "The Pragmatic Programmer," "Refactoring," and "Clean
          Code," which have significantly enriched my understanding of software
          development practices and principles.
        </p>
        <p>
          When I'm not immersed in the world of technology, you can find me
          playing sports, tackling house projects, and playing video/board
          games. I love playing hockey, softball, and volleyball in particular
          and enjoy having an opportunity to be competitive and challenge
          myself. Engaging in woodworking and house projects provides me with an
          immersive environment where I can cultivate my critical thinking
          skills while experiencing the gratification of crafting tangible
          creations with my own hands. And when I'm looking to unwind and
          indulge in a bit of creativity, I often turn to video games. They
          offer me a chance to immerse myself in captivating worlds while honing
          my problem-solving abilities.
        </p>
        <p>
          While I'm dedicated to my work, nothing compares to the joy I
          experience when spending quality time with my family. They are my
          greatest source of inspiration, constantly reminding me of the
          importance of balance and making time to spend with people you love.
        </p>
        <p>
          Thank you for visiting my website! Feel free to reach out if you have
          any questions or if there's an opportunity for us to collaborate on
          exciting projects.
        </p>
      </Content>
      <ContactButton>Contact Me</ContactButton>
      <ImageRowContainer>
        <AboutImage src={son} />
        <AboutImage src={family} />
        <AboutImage src={hockey} />
      </ImageRowContainer>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  // margin-top: ${NAVIGATION_HEIGHT};
  padding: 32px 32px 0 32px;
  box-sizing: border-box;
`;

const StyledHeadshot = styled.img`
  width: 150px;
  display: flex;
`;

const Title = styled.h1``;

const Content = styled.div`
  padding: 0 16px 16px 16px;
  width: 50%;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const ContactButton = styled.button`
  padding: 16px;
  border: none;
  color: #ffffff;
  background-color: #cf1e51;
  border-radius: 4px;
`;

const ImageRowContainer = styled.div`
  display: flex;
  padding-top: 32px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 32px;
  }
`;

const AboutImage = styled.img`
  @media screen and (max-width: 1024px) {
    padding: 16px;
  }
`;
