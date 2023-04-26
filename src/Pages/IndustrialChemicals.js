import React from "react";
import {
  AddFlex,
  AddMargin,
  CustomText,
} from "../Components/ReusableStyledComponents";
import { Instrial_Product } from "../Configs/configs";
import { messageTemplate } from "../Configs/helpers";
import { HeroImageComponet, ImageText, Tile } from "./Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Industrial from "../Images/Industrial.jpg";
import styled from "styled-components";

const Image = styled.img`
  width: 300px;
  margin-top: 30px;
`;

function IndustrialChemicals({ windowSize }) {
  return (
    <>
      <HeroImageComponet img={Industrial}>
        <ImageText margin="20px">
          <CustomText
            color="white"
            fontSize={windowSize[0] > 700 ? "60px" : "35px"}
            margin="0px"
            fontWeight="600"
          >
            Industrial fertilizers
          </CustomText>
        </ImageText>
      </HeroImageComponet>
      {Instrial_Product.map((product) =>
        product.swap === true ? (
          <AddFlex
            align="flex-start"
            wrap="wrap"
            margin={windowSize[0] > 700 ? "100px 0" : "70px 0"}
          >
            <Tile
              img={product.img}
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
                {product.title}
              </CustomText>
              <CustomText>{product.content}</CustomText>
              <Image src={product.table} />
              <AddFlex
                cursor="pointer"
                justify="flex-end"
                align="flex-end"
                margin="30px 0"
              >
                <a
                  href={`https://api.whatsapp.com/send?phone=918411005850&text=${messageTemplate(
                    product.title
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
        ) : (
          <AddFlex
            align="flex-start"
            wrap="wrap"
            margin={windowSize[0] > 700 ? "100px 0" : "10px 0"}
          >
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
                {product.title}
              </CustomText>
              <CustomText>{product.content}</CustomText>
              <Image src={product.table} />
              <AddFlex
                cursor="pointer"
                justify="flex-end"
                align="flex-end"
                margin="30px 0"
              >
                <a
                  href={`https://api.whatsapp.com/send?phone=918411005850&text=${messageTemplate(
                    product.title
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
            <Tile
              img={product.img}
              height={windowSize[0] > 700 ? "500px" : "90vw"}
              width={windowSize[0] > 700 ? "500px" : "90vw"}
            ></Tile>
          </AddFlex>
        )
      )}
    </>
  );
}

export default IndustrialChemicals;
