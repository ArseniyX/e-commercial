import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.svg";
import Search from "./SearchAppBar";
import { ProductsStore } from "../store/ProductsStore";
import { observer } from "mobx-react";
import { SORT } from "../utils/constants";
import { AppBar, Box, Grid, Toolbar } from "@mui/material";

const LogoImg = styled.img`
  width: 100%;
  max-height: 48px;
  cursor: pointer;
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const StyledButton = styled.button`
  width: 100%;
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
    ProductsStore.filterFavorites();
  };

  const onLogo = () => {
    ProductsStore.setFilter("");
    ProductsStore.setSort(SORT.RECENTLY_ADDED);
  };

  const { length } = ProductsStore.favorites;
  return (
    <Box sx={{ flexGrow: 1, padding: "8px 0" }}>
      <AppBar position="static" style={{ background: "#fff" }}>
        <Toolbar style={{ padding: "10px" }}>
          <Grid container spacing={5}>
            <Grid item lg={3} md={3} sm={4}>
              <LogoImg src={logo} alt="logo" onClick={onLogo} />
            </Grid>
            <Grid item lg={5} md={4} sm={8}>
              <Search productsStore={ProductsStore} />
            </Grid>
            <Box sx={{ flexGrow: 1 }} />
            <Grid item container spacing={2} lg={4} md={5} sm={12}>
              <Grid item lg={4} md={4} sm>
                <WatchButton count={length} onClick={onWatch}>
                  Watch
                </WatchButton>
              </Grid>
              <Grid item lg={4} md={4} sm>
                <StyledButton>My cart</StyledButton>
              </Grid>
              <Grid item lg={4} md={4} sm style={{ textAlign: "center" }}>
                <img src={avatar} alt="avatar" style={{ width: "48px" }} />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default Header;
