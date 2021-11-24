import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function CustomAppBar() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#FFD241",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
              fontFamily: "Patrick Hand, cursive",
              fontWeight: "bold",
              userSelect: "none",
            }}
          >
            Python For Kids
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: "black",
              marginRight: 6,
              fontFamily: "Patrick Hand, cursive",
              fontWeight: "bold",
              border: "2px solid #78006c",
              backgroundColor: "#ff78d0",
              "&:hover": {
                backgroundColor: "#FF78F2",
              },
            }}
          >
            About us
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "black",
              marginRight: 1,
              fontFamily: "Patrick Hand, cursive",
              fontWeight: "bold",
              border: "2px solid #00598c",
              backgroundColor: "#78CEFF",
              "&:hover": {
                backgroundColor: "#78f0ff",
              },
            }}
          >
            Contact us
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
