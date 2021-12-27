import React from "react";
import styled from "styled-components";
import menuIcon from "../assets/icons/menu.svg";
import Sort from "./Sort";
import { ProductsStore } from "../store/ProductsStore";
import CategoriesList from "./CategoriesList";
import { Box, Button, Drawer, useMediaQuery } from "@mui/material";
import { UiStore } from "../store/UiStore";

const MenuIcon = styled.img`
  margin: 7px;
`;

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
    <Sort isOpen={false} productsStore={ProductsStore} />
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

const SideBar = ({ openDrawer = false }) => {
  const matches = useMediaQuery("(max-width:900px)");
  if(matches) {
    UiStore.toggleSideBar()
  }
  return matches ? (
    <Drawer open={openDrawer}>{sideBar}</Drawer>
  ) : (
    <Box sx={sideBarBox}>{sideBar}</Box>
  );
};

export default SideBar;
