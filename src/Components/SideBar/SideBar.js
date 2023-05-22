import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import person1 from "../Assets/A11.jpg";
import React from "react";

function SideBar() {
  return (
    <Box sx={{ mt: 8, ml: 3 }}>
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
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default SideBar;
