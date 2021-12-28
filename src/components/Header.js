import React from "react";
import styled from "styled-components";
import muiStyled from "@mui/styled-engine";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.svg";
import Search from "./SearchAppBar";
import { ProductsStore } from "../store/ProductsStore";
import { observer } from "mobx-react";
import { SORT } from "../utils/constants";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { UiStore } from "../store/UiStore";

const StyledButton = muiStyled(Button)({
  width: "100%",
  fontFamily: "'Quicksand', sans-serif",
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "150%",
  padding: "8px",
  color: "#2264d1",
  border: "1px solid #9dc2ff",
  "&:hover": {
    boxShadow:
      "0px 2px 4px rgba(27, 78, 163, 0.2),\n0px 4px 8px rgba(41, 121, 255, 0.2)",
  },
});

const WatchButton = muiStyled(StyledButton)(({ count }) => ({
  "&:after": {
    display: count ? "inline-block" : "none",
    content: `"${count}"`,
    position: "absolute",
    right: "-7px",
    top: "-7px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#f44336",
    fontFamily: "'Quicksand'",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.25px",
    textTransform: "uppercase",
    color: "#fff",
  },
}));

const LogoImage = muiStyled("img")(() => ({
  background: "linear-gradient(90deg, #2979FF 0%, #4C589E 100%)",
  borderRadius: "6px",
  fontSize: "32px",
  padding: "12px",
  margin: "7px",
  marginLeft: "26px",
  cursor: "pointer",
}));

const LogoText = muiStyled(Typography)(() => ({
  fontFamily: "Red Hat Display",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "36px",
  lineHeight: "36px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  color: "#0C2146",
}));

const Header = observer(() => {
  const onWatch = () => {
    ProductsStore.filterFavorites();
  };

  const onLogo = () => {
    ProductsStore.setFilter("");
    ProductsStore.setSort(SORT.RECENTLY_ADDED);
  };

  const openSideBar = () => {
    UiStore.toggleSideBar();
    console.log("test");
  };

  const visibility = useMediaQuery("(max-width:900px)") ? "block" : "none";

  const { length } = ProductsStore.favorites;
  return (
    <Box sx={{ flexGrow: 1, padding: "8px 0", width: "100%" }}>
      <AppBar position="static" style={{ background: "#fff", borderRadius: 4 }}>
        <Toolbar style={{ padding: "10px" }}>
          <Grid container spacing={3}>
            <Grid item sm={1} xs={1} sx={{ display: `${visibility}` }}>
              <IconButton
                onClick={openSideBar}
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <MenuIcon
                  sx={{ fontSize: "3rem", color: "#000", width: "46px" }}
                />
              </IconButton>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={5} xs={11}>
              <Box sx={{ display: "flex" }}>
                <LogoImage src={logo} alt="logo" onClick={onLogo} />
                <LogoText onClick={onLogo}>Shopka</LogoText>
              </Box>
            </Grid>

            <Grid item xl={5} lg={4.5} md={3.5} sm={6} xs={12}>
              <Search productsStore={ProductsStore} />
            </Grid>
            <Box sx={{ flexGrow: 1 }} />
            <Grid
              item
              container
              spacing={1}
              xl={4}
              lg={4}
              md={5}
              sm={12}
              xs={12}
              sx={{ margin: "0" }}
            >
              <Grid item xl lg md sm={5} xs={5}>
                <WatchButton count={length} onClick={onWatch}>
                  Watch
                </WatchButton>
              </Grid>
              <Grid item xl lg md sm={5} xs={5}>
                <StyledButton variant="outlined">My cart</StyledButton>
              </Grid>
              <Grid item xl lg md sm={2} xs={2} style={{ textAlign: "center" }}>
                <Avatar
                  sx={{ mr: 2 }}
                  src={avatar}
                  alt="avatar"
                  style={{ width: "48px", height: "48px", margin: "auto" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default Header;
