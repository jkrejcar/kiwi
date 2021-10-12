import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const Panel = styled(Paper)`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-height: 400px;
  margin-top: 10px;
`;

export default function ActionPanel(props) {
  const handleChangeFilter = (event) => {
    console.log(event.target.checked);
    props.onFilter(event.target.checked);
  };

  const handleChangeKeyboard = (event) => {
    console.log(event.target.checked);
    props.onKeyboard(event.target.checked);
  };

  return (
    <Panel elevation={3}>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" column>
          <FormControlLabel
            value="top"
            control={<Switch onChange={handleChangeFilter} color="primary" />}
            label="English Words Only"
            labelPlacement="top"
          />
          <FormControlLabel
            value="top"
            control={<Switch defaultChecked onChange={handleChangeKeyboard} color="primary" />}
            label="Keyboard"
            labelPlacement="top"
          />
        </FormGroup>
      </FormControl>
    </Panel>
  );
}
