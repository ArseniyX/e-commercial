import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  FormControl,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemText,
  Radio,
  RadioGroup,
} from "@mui/material";
import { observer } from "mobx-react";
import key from "random-string";
import React from "react";
import { SORT } from "../utils/constants";
import SortItem from "./SortItem";

const sortNames = Object.values(SORT);

const Sort = observer(({ productsStore, isOpen }) => {
  const [open, setOpen] = React.useState(isOpen);
  const [value, setValue] = React.useState(SORT.RECENTLY_ADDED);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="All Filters" />
        {open ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              {sortNames.map((sortName) => (
                <SortItem
                  key={key({ length: 7 })}
                  productsStore={productsStore}
                  sortName={sortName}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </List>
      </Collapse>
    </List>
  );
});

export default Sort;
