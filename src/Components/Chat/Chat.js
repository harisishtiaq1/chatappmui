import { Avatar, Badge, Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import person4 from "../Assets/A10.jpg";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function Chat() {
  return (
    <Paper sx={{ borderRadius: "16px", padding: 2 }}>
      <Box sx={{ display: "flex", ml: 0.5 }}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" src={person4} />
        </StyledBadge>
        <Stack direction="column">
          <Typography sx={{ fontWeight: "600", ml: 2 }}>
            Jubina Chawla
          </Typography>
          <Typography
            sx={{
              ml: 2,
              fontWeight: "100",
              color: "grey",
              fontSize: "13px",
            }}
          >
            Online
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
}

export default Chat;
