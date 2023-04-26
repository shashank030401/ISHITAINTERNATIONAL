import React, { Children, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navItems } from "../Configs/configs";
import { AddFlex, AddMargin, CustomText } from "./ReusableStyledComponents";
import Sidebar from "./Sidebar";

export const NavItem = styled(Link)`
  margin: 10px;
  color: ${(props) => (props.changeLinkColor ? "#000000" : "#ffffff")};
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid transparent;
  margin: ${(props) => props.margin && props.margin};
  padding: ${(props) => props.padding && props.padding};
  &:hover {
    border-bottom: 1px solid white;
  }
`;

const ChildrenContainer = styled(AddMargin)`
  overflow-x: hidden;
`;
const StyledAddFlex = styled(AddFlex)`
  position: fixed;
  top: 0;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) => (props.showBg ? "#ffffff" : "transparent")};
  width: 100vw;
  padding: 10px;
  font-family: Poppins, sans-serif;
  z-index: 1111;
`;

function Navbar({ children, margin, isChangeNavBg }) {
  const [changeNavBg, setChangeNavBg] = useState(false);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const handleWindowResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };
  const handleScroll = () => {
    if (window.scrollY > 60) {
      setChangeNavBg(true);
    } else {
      setChangeNavBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <>
      <StyledAddFlex
        justify={windowSize[0] > 700 ? "flex-end" : "flex-start"}
        showBg={isChangeNavBg || changeNavBg || windowSize[0] <= 700}
      >
        <AddFlex display={windowSize[0] > 700 ? "flex" : "none"}>
          {navItems.map((navItem) => (
            <NavItem
              key={navItem.id}
              to={navItem.URL}
              changeLinkColor={isChangeNavBg || changeNavBg}
            >
              {navItem.navItemName}
            </NavItem>
          ))}
        </AddFlex>
        <AddFlex display={windowSize[0] > 700 ? "none" : "flex"}>
          <Sidebar />
        </AddFlex>
      </StyledAddFlex>
      <ChildrenContainer margin={margin ? margin : "0px 0 0 0"}>
        {children}
      </ChildrenContainer>
    </>
  );
}

export default Navbar;
