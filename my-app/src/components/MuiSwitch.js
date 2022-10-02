import React, { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

const MuiSwitch = () => {
  const [mode, setMode] = useState(false);
  console.log(mode);

  const handleChange = (e) => {
    setMode(e.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label={mode ? "Dark mode" : "Light mode"}
        control={
          <Switch
            checked={mode}
            onChange={handleChange}
            color="secondary"
            size="small"
          />
        }
      />
    </Box>
  );
};

export default MuiSwitch;
