import { Autocomplete, Box, Container, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { SORT } from "../utils/constants";

const ListHederContainer = styled.div``;

const ListHeader = () => {
  const options = Object.values(SORT);

  return (
    <Container style={{ padding: "18px 0", display: "flex" }}>
      <Box spacing={2} sx={{ display: "flex" }}>
        <Autocomplete
          disablePortal
          value={SORT.RECENTLY_ADDED}
          id="combo-box-demo"
          options={options}
          sx={{ width: 200, mr: 1 }}
          renderInput={(params) => <TextField {...params} label="SORT BY" />}
        />
        <Autocomplete
          disabled
          disablePortal
          value={"condition"}
          id="combo-box-demo"
          options={[]}
          sx={{ width: 150, mr: 1 }}
          renderInput={(params) => <TextField {...params} />}
        />
        <Autocomplete
          disabled
          disablePortal
          value={"Delivery options"}
          id="combo-box-demo"
          options={[]}
          sx={{ width: 180 }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
    </Container>
  );
};

export default ListHeader;
