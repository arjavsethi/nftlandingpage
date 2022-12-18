import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoPng from "../assets/logo.png"
const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Logo = () => {
  // return (
  //   <LogoText>
  //     <Link to="/">W.</Link>
  //   </LogoText>
  // );
  return(
    <><img src={LogoPng} alt="logo" style={{objectFit:"contain", width:"100px" , height:"80px", padding:"5px",margin:"3px"}} /></>
  )
};

export default Logo;
