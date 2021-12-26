import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import searchIcn from "../assets/icons/search.svg";
import clearIcn from "../assets/icons/close.svg";
import { observer } from "mobx-react";

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
  width: 670px;
  border: none;
  padding-left: 40px;

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 158%;
  letter-spacing: 0.0075em;
`;

const ClearIcon = styled.img`
  margin-left: -35px;
  width: 14px;
  cursor: pointer;
`;

const SearchAppBar = observer(({ productsStore }) => {
  const inputRef = useRef();

  const onClearBtn = () => {
    inputRef.current.value = "";
    productsStore.setFilter("");
  };

  const setFilter = () => {
    const { value } = inputRef.current;
    productsStore.setFilter(value);
  };

  return (
    <SearchContainer>
      <SearchIcon src={searchIcn} alt="search-icon" />
      <StyledInput ref={inputRef} onChange={setFilter} />
      <ClearIcon src={clearIcn} alt="clear-icon" onClick={onClearBtn} />
    </SearchContainer>
  );
});

export default SearchAppBar;
