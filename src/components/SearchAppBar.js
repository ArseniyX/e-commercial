import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { styled as muiStyled, alpha } from "@mui/material/styles";

import searchIcn from "../assets/icons/search.svg";
import clearIcn from "../assets/icons/close.svg";
import { observer } from "mobx-react";
import { Grid, InputBase, TextField } from "@mui/material";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchIcon = styled.img`
  width: 16px;
  margin-right: -35px;
  z-index: 2;
`;

const StyledInput = styled.input`
  font-family: "Inter", sans-serif;
  background: #ededf0;
  border-radius: 99px;
  max-width: 670px;
  border: none;
  padding-left: 40px;

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 158%;
  letter-spacing: 0.0075em;
`;

const Search = muiStyled("div")(({ theme }) => ({
  fontFamily: "Inter, sans-serif",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(),
  marginLeft: 0,
  width: "100%",
  height: "100%",
}));

const StyledInputBase = muiStyled(InputBase)(({ theme }) => ({
  border: "none",
  width: "100%",
  height: "100%",
  color: "#19191D",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    background: "#EDEDF0",
    borderRadius: "100px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

const ClearIcon = styled.img`
  margin-left: -35px;
  width: 14px;
  cursor: pointer;
`;

const SearchAppBar = observer(({ productsStore }) => {
  const inputRef = useRef();
  const [value, setValue] = React.useState("");

  const onClearBtn = () => {
    inputRef.current.value = "";
    productsStore.setFilter("");
  };

  const setFilter = (e) => {
    setValue(e.target.value);
    productsStore.setFilter(e.target.value);
  };

  return (
    
      <Search>
        <StyledInputBase
          inputRef={inputRef}
          value={value}
          onChange={setFilter}
          startAdornment={<SearchIcon src={searchIcn} alt="clear-icon" />}
          endAdornment={
            value && (
              <ClearIcon src={clearIcn} alt="clear-icon" onClick={onClearBtn} />
            )
          }
        />
      </Search>
    
  );
});

export default SearchAppBar;

