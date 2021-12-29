import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomAppBar from "./CustomAppBar";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../api/ApiRequestHandler";
import Divider from "@mui/material/Divider";

export default function VideoTutorialPage() {
  const navigate = useNavigate();

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
          backgroundColor: "#3775A8",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 2,
          padding: "10px",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "3px",
            margin: "5px",
          }}
        >
          <label>
            Python Tutorial for Beginners 1- Install and Setup for Mac and
            Windows
          </label>
          <video
            style={{ padding: "3px", margin: "10px" }}
            width="400"
            controls
          >
            <source
              src="/videos/Python Tutorial for Beginners 1- Install and Setup for Mac and Windows.mp4"
              type="video/mp4"
            />
            {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
            Your browser does not support HTML video.
          </video>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "40%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "3px",
            margin: "5px",
          }}
        >
          <label>
            Python Tutorial for Beginners 2- Strings - Working with Textual Data
          </label>
          <video
            style={{ padding: "3px", margin: "10px" }}
            width="400"
            controls
          >
            <source
              src="/videos/Python Tutorial for Beginners 2- Strings - Working with Textual Data.mp4"
              type="video/mp4"
            />
            {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
            Your browser does not support HTML video.
          </video>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "40%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "3px",
            margin: "5px",
          }}
        >
          <label>
            Python Tutorial for Beginners 3- Integers and Floats - Working with
            Numeric Data
          </label>
          <video
            style={{ padding: "3px", margin: "10px" }}
            width="400"
            controls
          >
            <source
              src="/videos/Python Tutorial for Beginners 3- Integers and Floats - Working with Numeric Data.mp4"
              type="video/mp4"
            />
            {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
            Your browser does not support HTML video.
          </video>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "40%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "3px",
            margin: "5px",
          }}
        >
          <label>
            Python Tutorial for Beginners 4- Lists, Tuples, and Sets
          </label>
          <video
            style={{ padding: "3px", margin: "10px" }}
            width="400"
            controls
          >
            <source
              src="/videos/Python Tutorial for Beginners 4- Lists, Tuples, and Sets.mp4"
              type="video/mp4"
            />
            {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
            Your browser does not support HTML video.
          </video>
        </Box>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "3px",
            margin: "5px",
          }}
        >
          <label>
            Python Tutorial for Beginners 5- Dictionaries - Working with
            Key-Value Pairs
          </label>
          <video
            style={{ padding: "3px", margin: "10px" }}
            width="400"
            controls
          >
            <source
              src="/videos/Python Tutorial for Beginners 5- Dictionaries - Working with Key-Value Pairs.mp4"
              type="video/mp4"
            />
            {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
            Your browser does not support HTML video.
          </video>
        </Box>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "3px",
            margin: "5px",
          }}
        >
          <label style={{textAlign:"center"}}>
            Python Tutorial for Beginners 6- Conditionals and Booleans - If,
            Else, and Elif Statements
          </label>
          <video
            style={{ padding: "3px", margin: "10px" }}
            width="400"
            controls
          >
            <source
              src="/videos/Python Tutorial for Beginners 6- Conditionals and Booleans - If, Else, and Elif Statements.mp4"
              type="video/mp4"
            />
            {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
            Your browser does not support HTML video.
          </video>
        </Box>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "3px",
            margin: "5px",
          }}
        >
          <label>
            Python Tutorial for Beginners 7- Loops and Iterations - For_While
            Loops
          </label>
          <video
            style={{ padding: "3px", margin: "10px" }}
            width="400"
            controls
          >
            <source
              src="/videos/Python Tutorial for Beginners 7- Loops and Iterations - For_While Loops.mp4"
              type="video/mp4"
            />
            {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
            Your browser does not support HTML video.
          </video>
        </Box>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "3px",
            margin: "5px",
          }}
        >
          <label>Python Tutorial for Beginners 8- Functions</label>
          <video
            style={{ padding: "3px", margin: "10px" }}
            width="400"
            controls
          >
            <source
              src="/videos/Python Tutorial for Beginners 8- Functions.mp4"
              type="video/mp4"
            />
            {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
            Your browser does not support HTML video.
          </video>
        </Box>
      </Box>
    </Box>
  );
}
