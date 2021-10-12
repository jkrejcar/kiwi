import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

const Panel = styled(Paper)`
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: stretch;
  justify-content: center;
  width: 500px;
  min-height: 600px;
  max-height: 100%;
  overflow: auto;
  z-index: 3;
  background-color: #1d3557;
`;

const WordChip = styled(Chip)`
  flex: 1, 0, 0px;
  margin: 5px;
  font-weight: 900;
  background-color: #a8dadc;
`;

const WordsPanel = (props) => {
  return (
    <Panel elevation={3}>
      {props.phoneWords.map((word, idx) => (
        <WordChip id={idx} label={word} />
      ))}
    </Panel>
  );
};

export default WordsPanel;
