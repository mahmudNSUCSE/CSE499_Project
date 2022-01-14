import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PythonLogo from "../images/python_logo.png";
import CustomAppBar from "./CustomAppBar";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../api/ApiRequestHandler";
import { quiz } from "./quiz";
import Quiz from "react-quiz-component";

export default function QuizPage() {
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
        <Quiz quiz={quiz} shuffle={true} />
      </Box>
    </Box>
  );
}
