import Error404Image from "../images/404_error.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function NoMatch() {
  let location = useLocation();
  const [currentPath, setCurrentPath] = useState(null);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 3
      }}
    >
      <Box>
        <Typography variant="h6" gutterBottom component="div">
          404. That’s an error.
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          The requested URL {currentPath} was not found on this server. That’s
          all we know.
        </Typography>
      </Box>
      <Box>
        <img
          src={Error404Image}
          srcSet={Error404Image}
          alt={"Error-404"}
          loading="lazy"
        />
      </Box>
    </Box>
  );
}
