import React from "react";
import { useState } from "react";

import { Stack, Autocomplete, TextField } from "@mui/material";

const MuiAutoComplete = () => {
  const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

  const skillsOptions = skills.map((skill, ind) => ({
    id: ind + 1,
    label: skill,
  }));

  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);

  console.log(value);

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />

      <Autocomplete
        options={skillsOptions}
        value={skill}
        onChange={(e, newValue) => setSkill(newValue)}
        renderInput={(params) => <TextField {...params} label="skills" />}
      />
    </Stack>
  );
};

export default MuiAutoComplete;
