import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  List,
  ListItemText,
  Paper,
  Popover,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../Assets/download.png";
import TranslateIcon from "@mui/icons-material/Translate";
import person1 from "../Assets/A10.jpg";
import SideBar from "../SideBar/SideBar";
function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box component="img" src={Logo} sx={{ width: "150px" }} />
          <Box sx={{ display: "flex", flexDirection: "row" }}>
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
                mt: 0.5,
              }}
            >
              <InputBase sx={{ ml: 2 }} placeholder="Search.." />
              <IconButton>
                <SearchIcon fontSize="small" />
              </IconButton>
            </Paper>
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
              <TranslateIcon />
            </IconButton>
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
              <NotificationsIcon />
            </IconButton>
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
              <MailIcon />
            </IconButton>

            <Box
              component="img"
              src={person1}
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                ml: 2,
                mt: 0.5,
              }}
            />
            <Stack direction="column">
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "black",
                  mt: 0.5,
                  ml: 2,
                }}
              >
                John Alex
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "grey",
                  ml: 2,
                }}
              >
                System Manager
              </Typography>
            </Stack>
            <IconButton
              onClick={handleClick}
              sx={{
                borderRadius: "none",
                border: "none",
                "&:hover": {
                  border: "none",
                  borderRadius: "none",
                },
              }}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <SideBar />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List sx={{padding:"10px"}}>
          <ListItemText sx={{cursor:'pointer'}}>
            <Typography>
              My Profile
            </Typography>
          </ListItemText>
          <ListItemText sx={{cursor:'pointer'}}>
            <Typography>
              Log Out
            </Typography>
          </ListItemText>
        </List>
      </Popover>
    </>
  );
}

export default Navbar;
