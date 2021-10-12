import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const KeyboardBox = styled(Box)`
  padding: 1em;
  width: 400px;
`;

const KeyboardButton = styled(Button)`
  background-color: #457b9d;
  &:hover {
    background-color: #1d3557;
  }
`;

const buttonLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, "<-", 0, "C"];

export default function PhoneKeyboard(props) {
  return (
    <KeyboardBox>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        columns={9}
      >
        {buttonLabels.map((label, idx) => (
          <Grid item xs={3} key={idx}>
            <KeyboardButton onClick={() => props.onClick(label)} variant="contained">{label}</KeyboardButton>
          </Grid>
        ))}
      </Grid>
    </KeyboardBox>
  );
}
