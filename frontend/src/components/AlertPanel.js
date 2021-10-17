import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";

export default function AlertPanel(props) {
  const { open, error } = props;
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert severity="error" variant="filled" sx={{ mt: 2, ml:2, mr:2, color:"black" }}>
          {error}
        </Alert>
      </Collapse>
    </Box>
  );
}
