import { Autocomplete, Box, Container, TextField } from "@mui/material";
import React from "react";
import { ProductsStore } from "../store/ProductsStore";
import { SORT } from "../utils/constants";

const ListHeader = () => {
  const options = Object.values(SORT);

  const onCategorySelect = (_, categoryName) => {
    if(categoryName == null) {
      return
    }
    ProductsStore.setSort(categoryName);
    console.log(categoryName)
  };

  return (
    <Container style={{ padding: "18px 0" }}>
      <Box spacing={2} sx={{ display: "flex", flexWrap: "wrap" }}>
        <Autocomplete
          disablePortal
          defaultValue={SORT.RECENTLY_ADDED}
          onChange={onCategorySelect}
          id="combo-box-demo"
          options={options}
          sx={{ width: 200, mr: 1, mb: 2 }}
          renderInput={(params) => <TextField {...params} label="SORT BY" />}
        />
        <Autocomplete
          disabled
          disablePortal
          value={"condition"}
          id="combo-box-demo"
          options={[]}
          sx={{ width: 150, mr: 1, mb: 2 }}
          renderInput={(params) => <TextField {...params} />}
        />
        <Autocomplete
          disabled
          disablePortal
          value={"Delivery options"}
          id="combo-box-demo"
          options={[]}
          sx={{ width: 180, mr: 1, mb: 2 }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
    </Container>
  );
};

export default ListHeader;
