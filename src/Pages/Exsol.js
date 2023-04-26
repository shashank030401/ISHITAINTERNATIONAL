import React from "react";
import styled from "styled-components";
import {
  AddFlex,
  AddMargin,
  CustomText,
} from "../Components/ReusableStyledComponents";
import EXSOL_Table from "../Images/EXSOL_Table.png";
import MAP from "../Images/WSF_Products/MAP.jpeg";
import { Tile } from "./Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { messageTemplate } from "../Configs/helpers";

const Image = styled.img`
  width: 800px;
  height: 600px;
`;
function Exsol({ windowSize }) {
  return (
    <>
      <AddFlex flexDirection="column" padding="20px">
        <CustomText
          fontSize={windowSize[0] > 700 ? "60px" : "25px"}
          fontWeight="600"
          color="black"
        >
          EXSOL Fertilizers for Farmers
        </CustomText>
        <CustomText margin="20px 0">
          Majority of water soluble fertilizer Imported into India are actually
          not made for Indian soil. Most of these fertilizers are actually
          increasing alkalinity of the soil and due this reason farm land in
          many areas have become unusable. We manufactured water soluble
          fertilizer that reduces pH of the soil in long term. None of our
          fertilizers require use of acid in the drip.
        </CustomText>
        <CustomText>
          We can manufacture any water soluble NPK. We are manufacturing 19all
          for last 16 years. Many leading fertilizer brands including GSFC,
          Excel Crop care have marketed our products. After almost 10 years of
          research we have developed 2 special types of 19-19-19. A few grades
          and its specification is given below for your reference. Please chose
          from the below grades or suggest us any special grade you need for
          your crop. Below grades are manufactured as per the alkalinity test of
          Indian soil. We make different fertilizers for plain area, hills and
          for a variety of geographical conditions.
        </CustomText>
        <div
          style={{ maxWidth: "90vw", overflowX: "scroll", marginTop: "20px" }}
        >
          <Image src={EXSOL_Table} />
        </div>
        <AddFlex
          align="flex-start"
          wrap="wrap"
          margin={windowSize[0] > 700 ? "100px 0" : "70px 0"}
        >
          <Tile
            img={MAP}
            height={windowSize[0] > 700 ? "500px" : "90vw"}
            width={windowSize[0] > 700 ? "500px" : "90vw"}
          ></Tile>
          <AddMargin
            width={windowSize[0] > 700 ? "700px" : "90vw"}
            height={windowSize[0] > 700 ? "500px" : "auto"}
          >
            <CustomText
              fontWeight="700"
              color="black"
              margin="0"
              fontSize="30px"
            >
              {"Mono ammonium Phosphate 12-61-0"}
            </CustomText>
            <CustomText>
              {
                "We are manufacturing 19all for last 16 years. Companies like GSFC, Excel Crop care and many other leading brands of India repacked distributed our products in the past. After research of more than 10 years we have developed 2 special types of 19-19-19."
              }
            </CustomText>
            <AddFlex
              cursor="pointer"
              justify="flex-end"
              align="flex-end"
              margin="30px 0"
            >
              <a
                href={`https://api.whatsapp.com/send?phone=918411005850&text=${messageTemplate(
                  "Mono ammonium Phosphate 12-61-0"
                ).replace(" ", "%20")}.`}
                style={{ textDecoration: "none" }}
              >
                <AddFlex>
                  <CustomText>Connect with us on whatsaap</CustomText>{" "}
                  <ArrowForwardIcon sx={{ color: "black" }} />
                </AddFlex>
              </a>
            </AddFlex>
          </AddMargin>
        </AddFlex>
      </AddFlex>
    </>
  );
}

export default Exsol;
