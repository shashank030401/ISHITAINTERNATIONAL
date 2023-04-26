import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AddFlex,
  AddMargin,
  CustomText,
} from "../Components/ReusableStyledComponents";
import { ServiceTiles } from "../Configs/configs";
import Hero from "../Images/Hero.jpg";

export const HeroImageComponet = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0),
      hsla(0, 0%, 0%, 0.75)
    ),
    url(${(props) => (props.img ? props.img : Hero)}) no-repeat center center /
      cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeroTextDiv = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Tile = styled(AddFlex)`
  min-height: ${(props) => (props.height ? props.height : "300px")};
  min-width: ${(props) => (props.width ? props.width : "300px")};
  cursor: pointer;
  border-radius: 4px;
  background: linear-gradient(
      180deg,
      hsla(0, 0%, 0%, 0.35),
      hsla(0, 0%, 0%, 0.55)
    ),
    url(${(props) => props.img}) no-repeat center center / cover;
  transition: background-color 0.3s ease-in-out;
  margin: 15px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const ImageText = styled(AddMargin)`
  position: absolute;
  bottom: 150px;
`;

function Home() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const handleWindowResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <>
      <HeroImageComponet>
        <ImageText margin="20px">
          <CustomText
            color="white"
            fontSize={windowSize[0] > 700 ? "60px" : "35px"}
            margin="0px"
            fontWeight="600"
          >
            Ishita International
          </CustomText>
          <CustomText color="white" margin="0px" fontSize="20px">
            The Chemistry Company
          </CustomText>
        </ImageText>
      </HeroImageComponet>
      <AddFlex margin="50px 0">
        <HeroTextDiv>
          <CustomText textAlign="center">
            "We are the only manufacturing company in INDIA to have it’s own
            soluble fertilizers (WSF) developed in the R&D infrastructure and
            therefore routinely springs up with innovative products and
            solutions through field trials and various other empirical
            approaches. Through the continuous patronage from the trade and our
            acme clients we have metamorphosed into a “WSF manufacturer” from an
            outsourcing company. The ISHITA team comprises specialty fertilizer
            professionals with the background of registering the first WSF “NPK
            19-19-19” in the fertilizer control order 1985. To add feather to
            our cap we are in co-marketing arrangements with more than 400
            companies across the country including large public sector
            companies."
          </CustomText>
        </HeroTextDiv>
      </AddFlex>
      <AddFlex wrap="wrap">
        {ServiceTiles.map((tile) => (
          <Link key={tile.id} to={tile.URL} style={{ textDecoration: "none" }}>
            <Tile img={tile.image}>
              <CustomText
                color="white"
                margin="0px"
                fontSize="20px"
                fontWeight="500"
              >
                {tile.serviceName}
              </CustomText>
            </Tile>
          </Link>
        ))}
      </AddFlex>
    </>
  );
}

export default Home;
