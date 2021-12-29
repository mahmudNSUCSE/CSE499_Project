import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export default function CustomAppBar() {
  const navigate = useNavigate();
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
            onClick={() => {
              navigate("/");
            }}
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
            onClick={() => {
              navigate("/aboutus");
            }}
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
            onClick={() => {
              navigate("/contact");
            }}
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
