import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import { navItems } from "../Configs/configs";
import { NavItem } from "./Navbar";
import { AddFlex } from "./ReusableStyledComponents";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };
  const handleDrawerClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <MenuIcon sx={{ color: "black" }} onClick={handleDrawerOpen} />
      <Drawer open={isOpen} onClose={handleDrawerClose}>
        <AddFlex
          flexDirection={"column"}
          align={"flex-start"}
          padding="0 30px 0 0"
          style={{ minWidth: "250px" }}
        >
          {navItems.map((navItem) => (
            <NavItem
              key={navItem.id}
              to={navItem.URL}
              padding="5px 0"
              changeLinkColor={true}
            >
              {navItem.navItemName}
            </NavItem>
          ))}
        </AddFlex>
      </Drawer>
    </>
  );
}

export default Sidebar;
