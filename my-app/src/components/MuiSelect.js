import React, { useState } from "react";
import { Box, MenuItem, TextField } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState([]);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  console.log(country);

  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="bn">Bangladesh</MenuItem>
        <MenuItem value="usa">USA</MenuItem>
        <MenuItem value="en">England</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
