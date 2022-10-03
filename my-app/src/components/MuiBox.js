import React from "react";
import { Box, Stack } from "@mui/material";

const MuiBox = () => {
  return (
    <Stack border="1px solid" spacing={2} direction="row">
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          width: "100px",
          height: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "red",
          },
        }}
      >
        box
      </Box>

      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      >
        Item 1
      </Box>
    </Stack>
  );
};

export default MuiBox;
