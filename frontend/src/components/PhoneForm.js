import React, { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import PhoneKeyboard from "./PhoneKeyboard";
//import AccountCircle from "@mui/icons-material/AccountCircle";

const CustomPaper = styled(Paper)`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-height: 400px;
  margin-top: 10px;
`;

const SubmitButton = styled(Button)`
  margin-top: 1em;
  display: block;
  width: 100%;
  background-color: #457b9d;
  &:hover {
    background-color: #1d3557;
  }
`;

const PhoneForm = (props) => {
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

  return (
    <CustomPaper elevation={3}>
      <Typography variant="h5" component="h3">
        Phone Words Generator
      </Typography>
      <Typography component="p">Valid are only digits from 2 to 9.</Typography>

      {props.phoneWrodsData.valid ? (
        ""
      ) : (
        <Alert severity="error">{props.phoneWrodsData.error}</Alert>
      )}

      <form onSubmit={handleOnSubmit}>
        <TextField
          label="Number"
          id="margin-normal"
          name="Number"
          variant="standard"
          fullWidth
          value={number}
          onChange={handleOnChange}
        />
        <SubmitButton disabled={!number} variant="contained" type="submit">
          Generate
        </SubmitButton>

        {props.showKeyboard ? (<PhoneKeyboard onClick={handleKeyboardClick} />) : ("")}
      </form>
    </CustomPaper>
  );
};

export default PhoneForm;
