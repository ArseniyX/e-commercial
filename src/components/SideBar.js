import React from "react";
import styled from "styled-components";
import menuIcon from "../assets/icons/menu.svg";
import Sort from "./Sort";
import { ProductsStore } from "../store/ProductsStore";
import CategoriesList from "./CategoriesList";
import { Drawer, useMediaQuery } from "@mui/material";

const LeftBarContainer = styled.div`
  margin-right: 15px;
  margin-top: 8px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const DepartmentsButton = styled.button`
  width: 95%;
  margin: 5px auto;
  padding: 0 10px;
  /* White 100% */
  background: #ffffff;

  /* Blue / 30 */
  border: 1px solid #9dc2ff;
  box-sizing: border-box;
  border-radius: 8px;

  font-family: "Quicksand", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;

  /* or 36px */
  display: flex;
  align-items: center;
  text-align: center;

  /* Blue / 70 */
  color: #2264d1;
`;

const ButtonWrapper = styled.span`
  margin: auto;
`;

const MenuIcon = styled.img`
  margin: 7px;
`;

const sideBar = (
  <>
    <DepartmentsButton>
      <MenuIcon src={menuIcon} alt="menu-icon" />
      <ButtonWrapper>Departments</ButtonWrapper>
    </DepartmentsButton>
    <CategoriesList isOpen={false} />
    <Sort isOpen={false} productsStore={ProductsStore} />
  </>
);

const SideBar = ({ isOpen = false, openDrawer = false }) => {

  const matches = useMediaQuery("(max-width:600px)");
  console.log(matches)
  return matches ? (
    <Drawer open={openDrawer}>{sideBar}</Drawer>
  ) : (
    <LeftBarContainer>{sideBar}</LeftBarContainer>
  );
};

export default SideBar;
