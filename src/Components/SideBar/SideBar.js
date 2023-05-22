import {
  Avatar,
  Box,
  Grid,
  IconButton,
  InputBase,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import ContactsIcon from "@mui/icons-material/Contacts";
import MailIcon from "@mui/icons-material/Mail";
import person1 from "../Assets/A11.jpg";
import person2 from "../Assets/A10.jpg";
import person3 from "../Assets/A1.jpg";
import Scrollbars from "react-custom-scrollbars";
import person4 from "../Assets/A12.jpg";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const thumbStyle = {
  backgroundColor: "#888",
  borderRadius: "6px",
  cursor: "pointer",
  width: "3px",
  height: "5px",
};
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

function SideBar() {
  return (
    <Box sx={{ mt: 7, ml: 12 }}>
      <Stack sx={{ mt: 4 }}>
        <Box position="static" sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "17px" }}>
            Chat App
          </Typography>
        </Box>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={3}>
            <Paper sx={{ borderRadius: "16px", width: "280px", padding: 1 }}>
              <Stack direction="row">
                <Box
                  component="img"
                  src={person1}
                  sx={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    ml: 2,
                    mt: 2,
                  }}
                />
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
              </Stack>
              <Paper
                sx={{
                  width: "210px",
                  height: "30px",
                  backgroundColor: "#F4F7FE",
                  borderRadius: "40px",
                  padding: "8px 42px 8px 20px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  mt: 2,
                }}
              >
                <InputBase sx={{ ml: 2 }} placeholder="Search.." />
                <IconButton>
                  <SearchIcon fontSize="small" />
                </IconButton>
              </Paper>
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  mt: 1,
                }}
              >
                <Stack
                  direction="column"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    color: "#0373fc",
                  }}
                >
                  <IconButton sx={{ width: 40, height: 40, color: "#0373fc" }}>
                    <MailIcon />
                  </IconButton>
                  <Typography>Messages</Typography>
                </Stack>
                <Stack
                  direction="column"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    color: "#0373fc",
                  }}
                >
                  <IconButton sx={{ width: 40, height: 40, color: "#0373fc" }}>
                    <ContactsIcon />
                  </IconButton>
                  <Typography>Contacts</Typography>
                </Stack>
              </Stack>
              <Box sx={{ width: "100%", mt: 2, height: "10px" }}>
                <LinearProgress
                  sx={{ height: "2px" }}
                  variant="determinate"
                  value={50}
                />
              </Box>
              <Scrollbars
                style={{ width: 290, height: 240 }}
                autoHide={true}
                renderThumbVertical={({ style, ...props }) => (
                  <div {...props} style={{ ...style, ...thumbStyle }} />
                )}
              >
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
              </Scrollbars>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default SideBar;
