import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Panel = styled(Paper)`
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: stretch;
  justify-content: center;
  min-height: 200px;
  max-height: 100%;
  overflow: auto;
  z-index: 3;
`;

const Word = styled(Chip)`
  flex: 1, 0, 0px;
  margin: 5px;
  font-weight: 900;
`;

const WordsPanel = (props) => {
  const { phoneWords, filter } = props;
  return (
    <Panel elevation={3}>
      {phoneWords.length <= 0 && !filter && (
        <Box>
          <Typography display="inline"  align="center" variant="h4" component="h4">
            <Box component="span" sx={{ color: "primary.main", mr:1}}>
            PhoneWords  
            </Box>
             Generator
          </Typography>
          <br />
          <Typography noWrap align="center" variant="h6" component="h6">
            Valid are only digits from 2 to 9.
          </Typography>
        </Box>
      )}
      {phoneWords.map((word, idx) => (
        <Word color="primary" id={idx} label={word} />
      ))}
    </Panel>
  );
};

export default WordsPanel;
