import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1" className="heading">
        heading 1
      </Typography>
      <Typography variant="h2">heading 2</Typography>
      <Typography variant="h3">heading 3</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        heading 4
      </Typography>
      <Typography variant="h5">heading 5</Typography>
      <Typography variant="h6">heading 6</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">Lorem ipsum dolor sit amet.</Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
        doloribus.
      </Typography>
    </div>
  );
};

export default MuiTypography;
