import { Avatar, Badge, Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import person1 from "../Assets/A10.jpg";
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
    },
  },
}));

function Chat() {
  return (
    <Paper sx={{ borderRadius: "16px" }}>
      <Box sx={{ display: "flex" }}>
        <Box>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={person1} />
          </StyledBadge>
          <Stack>
            <Typography
              sx={{ fontWeight: "600", mt: 2, ml: 2, fontSize: "16px" }}
            >
              John Alex
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "14px",
                color: "grey",
                ml: 2,
              }}
            >
              Online
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
}

export default Chat;
