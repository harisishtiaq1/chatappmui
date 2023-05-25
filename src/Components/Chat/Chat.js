import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useContext } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import { styled } from "@mui/material/styles";
import Messages from "./Messages";
import { ChatContext} from "../../Context/ChatContext";

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
  const { data } = useContext(ChatContext);
  return (
    <Paper sx={{ borderRadius: "16px", padding: 2, width: "900px" }}>
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
            <Avatar alt="Remy Sharp" src={data.user?.photoURL} />
          </StyledBadge>
          <Stack direction="column">
            <Typography sx={{ fontWeight: "600", ml: 2 }}>
              {data.user?.displayName}
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
            }}
          >
            <StarOutlineIcon />
          </IconButton>
          <Tooltip title="More" placement="top">
            <IconButton
              sx={{
                backgroundColor: "#F4F7FE",
                height: "40px",
                width: "40px",
                border: "1px solid trasparent",
                borderRadius: "50%",
                ml: 2,
                mt: 0.5,
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "grey", mt: 3 }} />
      <Messages />
      <Box sx={{ display: "none" }}>
        <Divider sx={{ backgroundColor: "grey" }} />
        <Stack direction="row">
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <TextField
            InputProps={{
              style: { borderRadius: "40px", height: "40px" },
            }}
            sx={{ width: "700px", borderRadius: "40px", padding: "12px 16px" }}
            placeholder="Type Something"
          />
          <IconButton
            sx={{
              backgroundColor: "rgb(10, 143, 220)",
              height: 45,
              width: 45,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 1,
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </Box>
    </Paper>
  );
}

export default Chat;
