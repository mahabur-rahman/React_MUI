import { useState } from "react";
import { Stack, Rating } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const MuiRating = () => {
  const [value, setValue] = useState(3);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<Favorite fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        // readOnly
        highlightSelectedOnly
      />
      <span>{value}</span>
    </Stack>
  );
};

export default MuiRating;
