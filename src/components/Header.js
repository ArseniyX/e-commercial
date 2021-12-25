import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.svg";
import Search from "./SearchAppBar";
import { ProductsStore } from "../store/ProductsStore";
import { observer } from "mobx-react";
import { SORT } from "../utils/constants";

const LogoImg = styled.img`
  cursor: pointer;
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;

  /* or 30px */
  padding: 8px;

  /* Blue / 70 */
  color: #2264d1;
  border: 1px solid #9dc2ff;
  box-sizing: border-box;
  border-radius: 4px;
  &:hover {
    box-shadow: 0px 2px 4px rgba(27, 78, 163, 0.2),
      0px 4px 8px rgba(41, 121, 255, 0.2);
  }
`;

const WatchButton = styled(StyledButton)`
  position: relative;
  &:after {
    display: ${({ count }) => (count ? "inline-block" : "none")};
    content: "${({ count }) => (count ? count : "")}";
    position: absolute;
    right: -7px;
    top: -7px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #f44336;

    font-family: "Quicksand";
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;

    /* White 100% */
    color: #fff;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Header = observer(() => {

  const onWatch = () => {
    ProductsStore.filterFavorites()
  }

  const onLogo = () => {
    ProductsStore.setFilter("")
    ProductsStore.setSort(SORT.RECENTLY_ADDED)
  }

  const { length } = ProductsStore.favorites;
  return (
    <HeaderContainer>
      <LogoImg src={logo} alt="logo" onClick={onLogo} />

      <Search productsStore={ProductsStore} />
      <OptionsContainer>
        <WatchButton count={length} onClick={onWatch}>
          Watch
        </WatchButton>
        <StyledButton>My cart</StyledButton>
        <img src={avatar} alt="avatar" />
      </OptionsContainer>
    </HeaderContainer>
  );
});

export default Header;
