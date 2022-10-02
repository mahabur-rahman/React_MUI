import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { BookmarkBorder, Bookmark } from "@mui/icons-material";

const MuiCheckbox = () => {
  const [acceptChecked, setAcceptChecked] = useState(false);
  const [skills, setSkills] = useState([]);

  console.log(skills);

  const handleChange = (e) => {
    setAcceptChecked(e.target.checked);
  };

  const handleSkill = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  return (
    <Box>
      <FormControlLabel
        label="I accept terms and condition"
        control={
          <Checkbox
            size="small"
            color="secondary"
            checked={acceptChecked}
            onChange={handleChange}
          />
        }
      />

      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={acceptChecked}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="html"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkill}
                />
              }
            />
            <FormControlLabel
              label="css"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkill}
                />
              }
            />
            <FormControlLabel
              label="js"
              control={
                <Checkbox
                  value="js"
                  checked={skills.includes("js")}
                  onChange={handleSkill}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
