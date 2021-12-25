import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { SORT } from "../utils/constants";

const FiltersContainer = styled.ul``;

const sortNames = Object.values(SORT);

const Sort = observer(({ type, productsStore }) => {
  const setSort = (sort) => {
    productsStore.setSort(sort);
    console.log(productsStore.sort);
  };

  return (
    <FiltersContainer>
      {sortNames.map((sort) => (
        <li onClick={() => setSort(sort)}>{sort}</li>
      ))}
    </FiltersContainer>
  );
});

export default Sort;
