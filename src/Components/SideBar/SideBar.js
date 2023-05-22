import {
  Box,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import person1 from "../Assets/A11.jpg";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function SideBar() {
  return (
    <Box sx={{ mt: 8, ml: 12 }}>
      <Stack sx={{ mt: 4 }}>
        <Box position="static" sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "17px" }}>
            Chat App
          </Typography>
        </Box>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={3}>
            <Paper
              sx={{ borderRadius: "16px", width: "300px", height: "200px" }}
            >
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
                  ml: 2,
                }}
              >
                <InputBase sx={{ ml: 2 }} placeholder="Search.." />
                <IconButton>
                  <SearchIcon fontSize="small" />
                </IconButton>
              </Paper>
              <Stack>
                <IconButton>
                  <MailIcon />
                </IconButton>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default SideBar;
