import {
  Box,
  Grid,
  IconButton,
  InputBase,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import MailIcon from "@mui/icons-material/Mail";
import person1 from "../Assets/A11.jpg";
import Scrollbars from "react-custom-scrollbars";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import Chat from "../Chat/Chat";
import Messages from "./Messages";
import Contacts from "./Contacts";

const thumbStyle = {
  backgroundColor: "#888",
  borderRadius: "6px",
  cursor: "pointer",
  width: "3px",
  height: "5px",
};

function SideBar() {
  const [showMessageComponent, setShowMessageComponent] = useState(true);
  const [showContactsComponent, setShowContactsComponent] = useState(false);
  const [progressValue, setProgressValue] = useState(50);

  const handleToggleMessageComponent = () => {
    setShowMessageComponent(true);
    setShowContactsComponent(false);
    setProgressValue(50);
  };

  const handleToggleContactsComponent = () => {
    setShowContactsComponent(true);
    setShowMessageComponent(false);
    setProgressValue(100);
  };
  return (
    <Box sx={{ mt: 7, ml: 5 }}>
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
                    color: showMessageComponent ? "#0373fc" : "black",
                  }}
                  onClick={handleToggleMessageComponent}
                >
                  <IconButton
                    sx={{
                      width: 40,
                      height: 40,
                      color: showMessageComponent ? "#0373fc" : "black",
                    }}
                  >
                    <MailIcon />
                  </IconButton>
                  <Typography>Messages</Typography>
                </Stack>
                <Stack
                  onClick={handleToggleContactsComponent}
                  direction="column"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    color: showContactsComponent ? "#0373fc" : "black",
                  }}
                >
                  <IconButton
                    sx={{
                      width: 40,
                      height: 40,
                      color: showContactsComponent ? "#0373fc" : "black",
                    }}
                  >
                    <ContactsIcon />
                  </IconButton>
                  <Typography>Contacts</Typography>
                </Stack>
              </Stack>
              <Box sx={{ width: "100%", mt: 2, height: "10px" }}>
                <LinearProgress
                  sx={{ height: "2px" }}
                  variant="determinate"
                  value={progressValue}
                />
              </Box>
              <Scrollbars
                style={{ width: 290, height: 230 }}
                autoHide={true}
                renderThumbVertical={({ style, ...props }) => (
                  <div {...props} style={{ ...style, ...thumbStyle }} />
                )}
              >
                {showMessageComponent && <Messages />}
                {showContactsComponent && <Contacts />}
              </Scrollbars>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Chat />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default SideBar;
