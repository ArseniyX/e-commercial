import React from "react";
import styled from "styled-components";
import menuIcon from "../assets/icons/menu.svg";
import Sort from "./Sort";
import { ProductsStore } from "../store/ProductsStore";
import CategoriesList from "./CategoriesList";
import { Box, Button, Drawer, useMediaQuery } from "@mui/material";

const DepartmentsButton = styled.button`
  width: 95%;
  margin: 5px auto;
  padding: 5px 15px;
  /* White 100% */
  background: #fff;

  /* Blue / 30 */
  border: 1px solid #9dc2ff;
  box-sizing: border-box;
  border-radius: 8px;

  font-family: "Quicksand", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 150%;

  /* or 36px */
  display: flex;
  align-items: center;
  text-align: center;

  /* Blue / 70 */
  color: #2264d1;
`;

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
  const matches = useMediaQuery("(max-width:600px)");
  return matches ? (
    <Drawer open={openDrawer}>{sideBar}</Drawer>
  ) : (
    <Box sx={sideBarBox}>{sideBar}</Box>
  );
};

export default SideBar;
