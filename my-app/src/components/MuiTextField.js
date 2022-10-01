import React, { useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";

const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="name" variant="outlined" />
          <TextField label="name" variant="filled" />
          <TextField label="name" variant="standard" />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField label="Small secondary" size="small" color="secondary" />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField label="name" required />

          <TextField
            label="password"
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={!value ? "Required!" : "Do not share your password!"}
          />

          <TextField label="read only" InputProps={{ readOnly: true }} />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />

          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default MuiTextField;
