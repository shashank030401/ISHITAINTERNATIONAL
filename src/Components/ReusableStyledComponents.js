import styled from "styled-components";

export const AddFlex = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  flex-wrap: ${(props) => props.wrap && props.wrap};
  flex-grow: ${(props) => props.grow && props.grow};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  margin: ${(props) => props.margin && props.margin};
  padding: ${(props) => props.padding && props.padding};
  cursor: ${(props) => props.cursor && props.cursor};
`;
export const AddMargin = styled.div`
  min-height: ${(props) => props.height && props.height};
  max-width: ${(props) => props.width && props.width};

  margin: ${(props) => (props.margin ? props.margin : "10px")};
`;
export const CustomText = styled.p`
  position: ${(props) => props.position && props.position};
  top: ${(props) => props.top && props.top};
  left: ${(props) => props.left && props.left};
  right: ${(props) => props.right && props.right};
  bottom: ${(props) => props.bottom && props.bottom};
  color: ${(props) => (props.color ? props.color : "#868686")};
  font-size: ${(props) => props.fontSize && props.fontSize};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  text-decoration: ${(props) => props.textDecoration && props.textDecoration};
  text-align: ${(props) => props.textAlign && props.textAlign};
`;
