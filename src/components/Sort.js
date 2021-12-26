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

const sortNames = Object.values(SORT);

const Sort = observer(({ productsStore }) => {
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(SORT.RECENTLY_ADDED);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const setSort = (sort) => {
    productsStore.setSort(sort);
    console.log(productsStore.sort);
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
                <ListItemButton
                  sx={{ pl: 4, height: 50 }}
                  key={key({ length: 7 })}
                  onClick={() => setSort(sortName)}
                >
                  <FormControlLabel
                    value={sortName}
                    control={<Radio />}
                    label={sortName}
                  />
                </ListItemButton>
              ))}
            </RadioGroup>
          </FormControl>
        </List>
      </Collapse>
    </List>
  );
});

export default Sort;
