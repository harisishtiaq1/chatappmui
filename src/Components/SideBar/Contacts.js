import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import person2 from "../Assets/A10.jpg";
import person3 from "../Assets/A1.jpg";
import person4 from "../Assets/A12.jpg";
function Contacts() {
  return (
    <Box>
      <Typography sx={{ fontWeight: "700", ml: 2, fontSize: "16px" }}>
        Contacts
      </Typography>
      <Box sx={{ mt: 3, ml: 3 }}>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
          <Avatar alt="Remy Sharp" src={person2} />
          <Stack direction="column">
            <Typography sx={{ fontWeight: "500", ml: 2, fontSize: "16px" }}>
              Jubina
            </Typography>
            <Typography sx={{ ml: 2, fontSize: "14px", color: "grey" }}>
              @jubina.1
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
          <Avatar alt="Remy Sharp" src={person3} />
          <Stack direction="column">
            <Typography sx={{ fontWeight: "500", ml: 2, fontSize: "16px" }}>
              Jubina
            </Typography>
            <Typography sx={{ ml: 2, fontSize: "14px", color: "grey" }}>
              @jubina.1
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
          <Avatar alt="Remy Sharp" src={person4} />
          <Stack direction="column">
            <Typography sx={{ fontWeight: "500", ml: 2, fontSize: "16px" }}>
              Jubina
            </Typography>
            <Typography sx={{ ml: 2, fontSize: "14px", color: "grey" }}>
              @jubina.1
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
          <Avatar alt="Remy Sharp" src={person2} />
          <Stack direction="column">
            <Typography sx={{ fontWeight: "500", ml: 2, fontSize: "16px" }}>
              Jubina
            </Typography>
            <Typography sx={{ ml: 2, fontSize: "14px", color: "grey" }}>
              @jubina.1
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
          <Avatar alt="Remy Sharp" src={person3} />
          <Stack direction="column">
            <Typography sx={{ fontWeight: "500", ml: 2, fontSize: "16px" }}>
              Jubina
            </Typography>
            <Typography sx={{ ml: 2, fontSize: "14px", color: "grey" }}>
              @jubina.1
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
          <Avatar alt="Remy Sharp" src={person4} />
          <Stack direction="column">
            <Typography sx={{ fontWeight: "500", ml: 2, fontSize: "16px" }}>
              Jubina
            </Typography>
            <Typography sx={{ ml: 2, fontSize: "14px", color: "grey" }}>
              @jubina.1
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
          <Avatar alt="Remy Sharp" src={person2} />
          <Stack direction="column">
            <Typography sx={{ fontWeight: "500", ml: 2, fontSize: "16px" }}>
              Jubina
            </Typography>
            <Typography sx={{ ml: 2, fontSize: "14px", color: "grey" }}>
              @jubina.1
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
          <Avatar alt="Remy Sharp" src={person3} />
          <Stack direction="column">
            <Typography sx={{ fontWeight: "500", ml: 2, fontSize: "16px" }}>
              Jubina
            </Typography>
            <Typography sx={{ ml: 2, fontSize: "14px", color: "grey" }}>
              @jubina.1
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Contacts;
