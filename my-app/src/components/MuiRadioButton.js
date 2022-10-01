import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormGroup,
  FormHelperText,
} from "@mui/material";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");

  console.log(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box>
      <FormControl error>
        <FormLabel id="job">Years of experience</FormLabel>
        <RadioGroup
          name="job experience"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="2-5" value="2-5" />
          <FormControlLabel control={<Radio />} label="5-10" value="5-10" />
        </RadioGroup>

        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
