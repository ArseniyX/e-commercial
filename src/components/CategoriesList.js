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


export default function CategoriesList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Categories:
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="All Categories" />
        {open ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {CATEGORIES.map((category) => (
            <ListItemButton sx={{ pl: 4 }} key={key({ length: 7 })}>
              <ListItemText primary={category} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
      {CATEGORIES.map((category) => (
        <ListItemButton key={key({ length: 7 })}>
          <ListItemText primary={category} />
        </ListItemButton>
      ))}
    </List>
  );
}
