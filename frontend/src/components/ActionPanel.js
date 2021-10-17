import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Keyboard from "./Keyboard";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Collapse from "@mui/material/Collapse";

const ActionPanel = (props) => {
  const [number, setNumber] = useState("");

  const handleOnChange = (event) => {
    setNumber(event.target.value);
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    props.onSubmit(number);
  };

  const handleKeyboardClick = (label) => {
    switch (true) {
      case label === "<-":
        setNumber(number.slice(0, -1));
        break;
      case label === "C":
        setNumber("");
        break;
      default:
        setNumber(number.concat(label));
    }
  };

  const handleChangeFilter = (event) => {
    props.onFilter(event.target.checked);
  };

  const handleChangeKeyboard = (event) => {
    props.onKeyboard(event.target.checked);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <Grid container justifyContent="center">
          <Grid item xs={6} md={3} sx={{ mt: 2, ml:1}}>
            <FormControlLabel
              value="top"
              control={<Switch onChange={handleChangeFilter} color="primary" />}
              label="Filter Words"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={5} md={3}  sx={{ mt: 2}}>
            <FormControlLabel
              value="top"
              control={
                <Switch onChange={handleChangeKeyboard} color="primary" />
              }
              label="Keyboard"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12} md={2} sx={{ mt: 1, ml:2, mr:2 }}>
            <TextField
              label="Phone Number"
              name="PhoneNumber"
              variant="standard"
              size="small"
              fullWidth
              value={number}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} md={2} sx={{ mt: 1, ml:2, mr:2 }}>
            <Button fullWidth disabled={!number} variant="contained" type="submit">
              Generate
            </Button>
          </Grid>
          <Grid item xs={12} md={12}>
            <Collapse sx={{ mt: 2 }} in={props.showKeyboard}>
              <Grid container justifyContent="center">
                <Grid item>
                  <Keyboard onClick={handleKeyboardClick} />
                </Grid>
              </Grid>
            </Collapse>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ActionPanel;
