import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PythonLogo from "../images/python_logo.png";
import CustomAppBar from "./CustomAppBar";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../api/ApiRequestHandler";

export default function IndexPageAnother() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <CustomAppBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3775A8",
          flexGrow: 1,
          padding: 5,
        }}
      >
        <img
          src={PythonLogo}
          srcSet={PythonLogo}
          alt={"Python Logo"}
          loading="lazy"
        />
        <Typography
          variant="h2"
          gutterBottom
          component="div"
          sx={{
            color: "#FFD241",
            fontFamily: "Concert One, cursive",
            WebkitTextStroke: "2px #1c3b54",
          }}
        >
          Hey There!
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{
            fontFamily: "Road Rage, cursive",
            color: "white",
            textAlign:"center",
          }}
        >
          Want to learn some Python programming?
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: "black",
            padding: 1,
            border: "2px solid #4d8534",
            backgroundColor: "#81DD56",
            "&:hover": {
              backgroundColor: "#b3eb9a",
            },
          }}
        >
          <Typography
            gutterBottom
            component="div"
            sx={{
              color: "#885240",
              fontSize: "1.5rem",
              fontFamily: "Patrick Hand, cursive",
              fontWeight: "bold",
              marginBottom: 0,
            }}
          >
            Get Started
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
