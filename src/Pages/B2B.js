import React from "react";
import {
  AddFlex,
  AddMargin,
  CustomText,
} from "../Components/ReusableStyledComponents";
import { b2b } from "../Configs/configs";
import { Tile } from "./Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

function B2B({ windowSize }) {
  const navigate = useNavigate();
  const handleNavigateTo = (URL) => {
    navigate(URL);
  };
  return (
    <>
      {b2b.map((product) =>
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
              <AddFlex
                cursor="pointer"
                justify="flex-end"
                align="flex-end"
                margin="30px 0"
                onClick={() => handleNavigateTo("/industrial-chemicals")}
              >
                <ArrowForwardIcon />
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

export default B2B;
