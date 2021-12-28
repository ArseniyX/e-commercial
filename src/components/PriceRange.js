import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Slider,
} from "@mui/material";
import React from "react";
import { ProductsStore } from "../store/ProductsStore";

function valueFormat(value) {
  return `${value}$`;
}

const PriceRange = ({ isOpen }) => {
  const [value, setValue] = React.useState([10, 1000]);
  const [open, setOpen] = React.useState(isOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSubmit = (_, value) => {
    ProductsStore.setRange(value)
  };

  const handleChange = (_, newValues) => {
    setValue(newValues);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Price Range" />
        {open ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Slider
            sx={{ ml: 4, mt: 5, width: "75%" }}
            min={0}
            step={10}
            max={1000}
            getAriaLabel={() => "Price Range"}
            value={value}
            onChange={handleChange}
            onChangeCommitted={handleSubmit}
            valueLabelDisplay="on"
            valueLabelFormat={valueFormat}
          />
        </List>
      </Collapse>
    </List>
  );
};

export default PriceRange;
