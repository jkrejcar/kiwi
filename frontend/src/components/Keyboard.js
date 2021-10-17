import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const KeyboardBox = styled(Box)``;

const buttonLabels = [
  { number: 1, label: "" },
  { number: 2, label: "abc" },
  { number: 3, label: "def" },
  { number: 4, label: "ghi" },
  { number: 5, label: "jkl" },
  { number: 6, label: "mno" },
  { number: 7, label: "pqrs" },
  { number: 8, label: "tuv" },
  { number: 9, label: "wxyz" },
  { number: "<-", label: "" },
  { number: 0, label: "" },
  { number: "C", label: "" },
];

export default function Keyboard(props) {
  return (
    <KeyboardBox className="test">
      {buttonLabels.map((numberContent, idx) => (
        <React.Fragment key={idx}>
          <Button
            sx={{ minHeight: "60px", maxWidth: "60px", margin: "2px" }}
            onClick={() => {
              props.onClick(numberContent.number);
            }}
            variant="contained"
          >
            {numberContent.number}
            <br />
            {numberContent.label}
          </Button>
          {(idx + 1) % 3 === 0 ? <br /> : ""}
        </React.Fragment>
      ))}
    </KeyboardBox>
  );
}
