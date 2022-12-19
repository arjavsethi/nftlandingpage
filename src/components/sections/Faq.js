import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transformation: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.cauroselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
  }

  & > *::last-child {
    & > *::first-child {
      margin-top: 0;
    }
  }
`;

const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>FAQ</Title>
      <Container>
        <Box>
          <Accordion title="Where can I view my nfts?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
          <Accordion title="What's the mint price?">
            The mint price of 222 are free and 2000 at 0.019 ETH per NFT.
          </Accordion>
          <Accordion title="How do i mint?">
          With the help of Metamask wallet you can mint the NFTs. 
          </Accordion>
        </Box>
        <Box>
          <Accordion title="HOW CAN I USE MY NFT?">
            You will be able to use your NFT as an avatar in the Metaverse and
            our future video game. Holding also means that you are part of an
            exclusive network of investors and entrepreneurs.
          </Accordion>
            <Accordion title="Where can i ask more questions about nfts?">
              You can ask more questions about NFTs on our discord server. Or you can ask on our twitter handle.
            </Accordion>
          <Accordion title="What is NFT?">
          NFT means non-fungible tokens (NFTs), which are generally created using the same type of programming used for cryptocurrencies. In simple terms these cryptographic assets are based on blockchain technology. They cannot be exchanged or traded equivalently like other cryptographic assets
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
