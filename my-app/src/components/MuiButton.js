import React, { useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import {
  Send,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";

const MuiButton = () => {
  const [formats, setFormats] = useState([] || null);

  const handleFormatChange = (e, update) => {
    setFormats(update);
  };

  console.log(formats);
  return (
    <>
      <Stack spacing={4} direction="column">
        <Stack spacing={2} direction="row">
          <Button variant="text" className="text" href="http://google.com/">
            Text
          </Button>
          <Button variant="contained">Content</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack spacing={5} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>
          <Button variant="contained" color="warning">
            warning
          </Button>
          <Button variant="contained" color="info">
            info
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
        </Stack>

        <Stack display="block" spacing={4} direction="row">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>

        <Stack spacing={4} direction="row">
          <Button
            variant="contained"
            size="small"
            startIcon={<Send />}
            disableElevation
            disableRipple
          >
            Send
          </Button>
          <Button variant="contained" size="small" endIcon={<Send />}>
            End
          </Button>

          <IconButton>
            <Send />
          </IconButton>
        </Stack>

        <Stack direction="row">
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            size="small"
            color="secondary"
          >
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>

        <Stack>
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormatChange}
            size="small"
            color="secondary"
            orientation="vertical"
   
          >
            <ToggleButton value="bold">
              <FormatBold />
            </ToggleButton>

            <ToggleButton value="italic">
              <FormatItalic />
            </ToggleButton>

            <ToggleButton value="underlined">
              <FormatUnderlined />
            </ToggleButton>

            {formats.map((e) => (
              <span>{e}</span>
            ))}
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </>
  );
};

export default MuiButton;
