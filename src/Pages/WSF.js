import React from "react";
import {
  AddFlex,
  AddMargin,
  CustomText,
} from "../Components/ReusableStyledComponents";
import { HeroImageComponet, HeroTextDiv, ImageText, Tile } from "./Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WSF_Image from "../Images/WSF.jpg";
import B2B from "../Images/B2B.jpg";
import B2C from "../Images/B2C.jpg";
import { useNavigate } from "react-router-dom";

function WSF({ windowSize }) {
  const navigate = useNavigate();
  const handleNavigateTo = (URL) => {
    navigate(URL);
  };
  return (
    <>
      <HeroImageComponet img={WSF_Image}>
        <ImageText margin="20px">
          <CustomText
            color="white"
            fontSize={windowSize[0] > 700 ? "60px" : "35px"}
            margin="0px"
            fontWeight="600"
          >
            Water soluble fertilizers
          </CustomText>
        </ImageText>
      </HeroImageComponet>
      <AddFlex margin="50px 0">
        <HeroTextDiv>
          <CustomText textAlign="center">
            "We are a company developing various new generation fertilizers &
            chemicals in India. We are specialized in technology development and
            production of speciality chemicals. We developed our first
            indigenous water soluble fertilizer in the year 2007. We manufacture
            variety of custom made water NPK fertilizers and variety of Chemical
            nitrate and phosphate for use in agriculture and Industrial. These
            are mostly consumed on B2B by all sizes of companies across all
            geographical locations. We cater to more than 400 co marketing
            companies in India including large public sector companies."
          </CustomText>
        </HeroTextDiv>
      </AddFlex>
      <AddFlex
        align="flex-start"
        wrap="wrap"
        margin={windowSize[0] > 700 ? "100px 0" : "70px 0"}
      >
        <Tile
          img={B2B}
          height={windowSize[0] > 700 ? "500px" : "90vw"}
          width={windowSize[0] > 700 ? "500px" : "90vw"}
        ></Tile>
        <AddMargin
          width={windowSize[0] > 700 ? "700px" : "90vw"}
          height={windowSize[0] > 700 ? "500px" : "auto"}
        >
          <CustomText fontWeight="700" color="black" margin="0" fontSize="30px">
            B2B
          </CustomText>
          <CustomText>
            We produce a variety of water soluble fertilizer for co-marketing in
            India and for export. We are also producing variety of Industrial
            chemicals for water treatment, dye, pigment, phosphates and white
            gypsum for white cement, PoP and putty manufacturing. Please click
            on the relevant section below to know products we are currently
            producing.
          </CustomText>
          <AddFlex
            cursor="pointer"
            justify="flex-end"
            align="flex-end"
            margin="30px 0"
            onClick={() => handleNavigateTo("/wsf/b2b/products")}
          >
            <ArrowForwardIcon />
          </AddFlex>
        </AddMargin>
      </AddFlex>
      <AddFlex
        align="flex-start"
        wrap="wrap"
        margin={windowSize[0] > 700 ? "100px 0" : "10px 0"}
      >
        <AddMargin
          width={windowSize[0] > 700 ? "700px" : "90vw"}
          height={windowSize[0] > 700 ? "500px" : "auto"}
        >
          <CustomText fontWeight="700" color="black" margin="0" fontSize="30px">
            B2C
          </CustomText>
          <CustomText>
            As a B2C fertiliser service, our mission is to help individuals
            achieve beautiful and healthy gardens with our high-quality and
            effective fertiliser products. Our team of experts works tirelessly
            to develop formulations that are easy to use and tailored to the
            specific needs of different types of plants. We are committed to
            sustainability and responsible gardening practices, using only
            environmentally-friendly ingredients to promote a positive impact on
            the planet. Partner with us to create a lush and vibrant outdoor
            space that you can be proud of.
          </CustomText>
          <AddFlex
            cursor="pointer"
            justify="flex-end"
            align="flex-end"
            margin="30px 0"
            onClick={() => handleNavigateTo("/wsf/b2c/exsol-fertilizers")}
          >
            <ArrowForwardIcon />
          </AddFlex>
        </AddMargin>
        <Tile
          img={B2C}
          height={windowSize[0] > 700 ? "500px" : "90vw"}
          width={windowSize[0] > 700 ? "500px" : "90vw"}
        ></Tile>
      </AddFlex>
    </>
  );
}
export default WSF;
// We are a company developing various new generation fertilizers & chemicals in India.  We are specialized in technology development and production of speciality chemicals. We developed our first indigenous water soluble fertilizer in the year 2007.

// We manufacture variety of custom made water NPK fertilizers and variety of Chemical nitrate and phosphate for use in agriculture and Industrial. These are mostly consumed on B2B by all sizes of companies across all geographical locations. We cater to more than 400 co marketing companies in India including large public sector companies.
