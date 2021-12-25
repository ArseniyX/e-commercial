import React from "react";
import styled from "styled-components";
import menuIcon from "../assets/icons/menu.svg";
import Sort from "./Sort";
import { ProductsStore } from "../store/ProductsStore";
import CategoriesList from "./CategoriesList";

const LeftBarContainer = styled.div`
  margin-right: 25px;
`;

const DepartmentsButton = styled.button`
  width: 100%;
  margin: 10px 0;
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

const LeftBar = () => {
  return (
    <LeftBarContainer>
      <DepartmentsButton>
        <MenuIcon src={menuIcon} alt="menu-icon" />
        <ButtonWrapper>Departments</ButtonWrapper>
      </DepartmentsButton>
      <CategoriesList/>
      <Sort type="collapsed" productsStore={ProductsStore} />
      <Sort type="expanded" productsStore={ProductsStore} />
    </LeftBarContainer>
  );
};

export default LeftBar;
