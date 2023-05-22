import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import person2 from "../Assets/A10.jpg";
import person3 from "../Assets/A1.jpg";
import person4 from "../Assets/A12.jpg";

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
function Messages() {
  return (
    <Box>
      <Typography sx={{ fontWeight: "700", ml: 2, fontSize: "16px" }}>
        Connections
      </Typography>
      <Box sx={{ mt: 3, ml: 3 }}>
        <Box sx={{ display: "flex", cursor: "pointer" }}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={person3} />
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
              OK,will do it
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={person2} />
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
              OK,will do it
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
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
              OK,will do it
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={person2} />
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
              OK,will do it
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={person2} />
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
              OK,will do it
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={person2} />
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
              OK,will do it
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={person2} />
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
              OK,will do it
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", cursor: "pointer", mt: 2 }}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={person2} />
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
              OK,will do it
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Messages;
