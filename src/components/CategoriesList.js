import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { CATEGORIES } from "../utils/constants";
import key from "random-string";
import { ProductsStore } from "../store/ProductsStore";

export default function CategoriesList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const setCategory = (category) => {
    ProductsStore.setFilter(category);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="All Categories" />
        {open ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {CATEGORIES.map((category) => (
            <ListItemButton
              sx={{ pl: 4 }}
              key={key({ length: 7 })}
              onClick={() => setCategory(category)}
            >
              <ListItemText primary={category} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
