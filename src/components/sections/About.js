import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import Button from "../Button";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Themes";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 80%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }

  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transformation: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;
  margin-top : 1rem;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;

    button {
      margin: 0 auto;
    }
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>
            Welcome To  <br /> MONSTROUS NFT.
          </Title>
          <SubTextLight>
          All of this occurred in 2012, and at the time, everyone believed that the tsunami that hit Japan as a result of the earthquake was the worst event in human history. But they had no idea that that was only the beginning. The enormous volcano that was located beneath the ocean erupted as a result of an earthquake.
          </SubTextLight>
          <SubTextLight>
          Quite a bit of magma and four new species, which resembled monsters, emerged along with the lava. At first, people were terrified of these monster-like creatures, but after careful study, scientists learned that they are harmless to people and friendly. Additionally, they discovered that 2222 monsters that were separated from their families by a volcanic eruption.
          </SubTextLight>
          <SubTextLight>
          Monsters entered human culture after a particular period of time. As time went on, the exterior environment of earth's surface began to affect Monsters' health. Scientists discovered that returning monsters to the earth's core is the only way to cure them.
          </SubTextLight>
          <SubTextLight>
          Help us identify the route that will allow monsters to return to their home.
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button text="JOIN OUR DISCORD" link="#" />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
