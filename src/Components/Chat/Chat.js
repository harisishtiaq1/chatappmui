import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CallIcon from "@mui/icons-material/Call";
import person4 from "../Assets/A10.jpg";
import VideocamIcon from "@mui/icons-material/Videocam";
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
      border: "1px solid currentColor",
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
    <Paper sx={{ borderRadius: "16px", padding: 2, height: "430px", ml: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
        <Box>
          <Tooltip title="voice call" placement="top">
            <IconButton
              sx={{
                backgroundColor: "#F4F7FE",
                height: "40px",
                width: "40px",
                border: "1px solid trasparent",
                borderRadius: "50%",
                ml: 2,
                mt: 0.5,
                //   ml: 10,
              }}
            >
              <CallIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="video  call" placement="top">
            <IconButton
              sx={{
                backgroundColor: "#F4F7FE",
                height: "40px",
                width: "40px",
                border: "1px solid trasparent",
                borderRadius: "50%",
                ml: 2,
                mt: 0.5,
                //   ml: 10,
              }}
            >
              <VideocamIcon />
            </IconButton>
          </Tooltip>
          <IconButton
            sx={{
              backgroundColor: "#F4F7FE",
              height: "40px",
              width: "40px",
              border: "1px solid trasparent",
              borderRadius: "50%",
              ml: 2,
              mt: 0.5,
              //   ml: 10,
            }}
          >
            <StarOutlineIcon />
          </IconButton>
          <Tooltip title="Menu" placement="top">
            <IconButton
              sx={{
                backgroundColor: "#F4F7FE",
                height: "40px",
                width: "40px",
                border: "1px solid trasparent",
                borderRadius: "50%",
                ml: 2,
                mt: 0.5,
                //   ml: 10,
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "grey", height: "1px", mt: 3 }} />
    </Paper>
  );
}

export default Chat;
