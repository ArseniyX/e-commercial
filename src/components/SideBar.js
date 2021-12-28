import React from "react";
import styled from "styled-components";
import menuIcon from "../assets/icons/menu.svg";
import CategoriesList from "./CategoriesList";
import { Box, Button, Drawer, IconButton, useMediaQuery } from "@mui/material";
import PriceRange from "./PriceRange";
import { observer } from "mobx-react";
import MenuIcon from "@mui/icons-material/Menu";

const sideBar = (
  <>
    <Button
      variant="outlined"
      sx={{
        m: 1,
        fontFamily: "Quicksand, sans-serif",
        fontWeight: "bold",
        fontSize: "22px",
        lineHeight: "150%",
        color: "#2264d1",
      }}
      startIcon={<MenuIcon src={menuIcon} alt="menu-icon" />}
    >
      Departments
    </Button>
    <CategoriesList isOpen={false} />
    {/* <Sort isOpen={false} productsStore={ProductsStore} /> */}
    <PriceRange isOpen />
  </>
);

const sideBarBox = {
  display: "flex",
  flexDirection: "column",
  boxShadow: 5,
  m: "8px 8px 0 0",
  height: "100%",
  borderRadius: 1,
};

const SideBar = observer(({ uiStore }) => {
  const closeSideBar = () => {
    uiStore.toggleSideBar();
  };

  const matches = useMediaQuery("(max-width:900px)");
  const openDrawer = uiStore.isSideBar;
  console.log(openDrawer);
  return matches ? (
    <Drawer open={openDrawer}>
      <IconButton
        onClick={closeSideBar}
        color="primary"
        aria-label="upload picture"
        component="span"
        sx={{width: "70px"}}
      >
        <MenuIcon
          sx={{
            fontSize: "3rem",
            color: "#000",
            width: "46px",
          }}
        />
      </IconButton>
      {sideBar}
    </Drawer>
  ) : (
    <Box sx={sideBarBox}>{sideBar}</Box>
  );
});

export default SideBar;
