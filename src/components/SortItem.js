import { FormControlLabel, ListItemButton, Radio } from "@mui/material";
import key from "random-string";
import React from "react";

const SortItem = ({ productsStore, sortName }) => {

  const setSort = () => {
    productsStore.setSort(sortName);
    // setColor("#fff")
    // sortRef.current.style.backgroundColor = "#f5f5f5"
  };

  return (
    <ListItemButton
      sx={{ pl: 4, height: 50 }}
      key={key({ length: 7 })}
      onClick={() => setSort(sortName)}
    >
      <FormControlLabel value={sortName} control={<Radio />} label={sortName} />
    </ListItemButton>
  );
};

export default SortItem;
