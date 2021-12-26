import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { SORT } from "../utils/constants";

const ListHederContainer = styled.div``;

const ListHeader = () => {

  // const options = Object.values(SORT);

  return (
    <ListHederContainer>
      {/* <Autocomplete
        disablePortal
        value={SORT.RECENTLY_ADDED}
        id="combo-box-demo"
        options={options}
        sx={{ width: 176 }}
        renderInput={(params) => <TextField {...params} label="SORT BY" />}
      /> */}
    </ListHederContainer>
  );
};

export default ListHeader;
