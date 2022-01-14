import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomAppBar from "./CustomAppBar";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../api/ApiRequestHandler";
import Divider from "@mui/material/Divider";
import { red } from "@mui/material/colors";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Update the user using the browser API
    const jwt_token = window.localStorage.getItem("jwt-token");
    console.log(jwt_token);
    if (jwt_token == null) {
      navigate("/");
    } else {
      getUser(jwt_token)
        .then((respond) => {
          console.log(respond.data);
          if (respond.data) {
            setUser(respond.data);
          } else {
            window.localStorage.removeItem("jwt-token");
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error.response);
          alert(error.response.data.message);
          window.localStorage.removeItem("jwt-token");
          navigate("/");
        });
    }
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("jwt-token");
    navigate("/");
  };

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
      {user ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#3775A8",
            flexGrow: 1,
            padding: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "3px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              sx={{
                color: "#FFD241",
                fontFamily: "Concert One, cursive",
                WebkitTextStroke: "2px #1c3b54",
              }}
            >
              Hello {user.first_name + " " + user.last_name}
            </Typography>
            <Button
              onClick={handleLogout}
              variant="contained"
              sx={{
                color: "black",
                padding: 1,
                height: "80%",
                border: "2px solid #88524f",
                backgroundColor: "#885245",
                "&:hover": {
                  backgroundColor: "#885240",
                },
              }}
            >
              <Typography
                gutterBottom
                component="div"
                sx={{
                  color: "#FFF",
                  fontSize: "1.5rem",
                  fontFamily: "Patrick Hand, cursive",
                  fontWeight: "bold",
                  marginBottom: 0,
                }}
              >
                Logout
              </Typography>
            </Button>
          </Box>

          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 2,
              padding: "10px",
            }}
          >
            <Button
              onClick={() => {
                navigate("/learn-basic");
              }}
              variant="contained"
              sx={{
                margin: "10px",
                color: "black",
                padding: 5,
                height: "200px",
                width: "200px",
                borderRadius: "15px",
                border: "2px solid #E41F7B",
                backgroundColor: "#FF8BA0",
                "&:hover": {
                  backgroundColor: "#FFB6B3",
                },
              }}
            >
              <Typography
                gutterBottom
                component="div"
                sx={{
                  color: "#FFF",
                  fontSize: "1.5rem",
                  fontFamily: "Patrick Hand, cursive",
                  fontWeight: "bold",
                  marginBottom: 0,
                }}
              >
                Learn the basics
              </Typography>
            </Button>
            <Button
              onClick={() => {
                navigate("/video-tutorial");
              }}
              variant="contained"
              sx={{
                margin: "10px",
                color: "black",
                padding: 5,
                height: "200px",
                width: "200px",
                borderRadius: "15px",
                border: "2px solid #489228",
                backgroundColor: "#70B11A",
                "&:hover": {
                  backgroundColor: "#A3D480",
                },
              }}
            >
              <Typography
                gutterBottom
                component="div"
                sx={{
                  color: "#FFF",
                  fontSize: "1.5rem",
                  fontFamily: "Patrick Hand, cursive",
                  fontWeight: "bold",
                  marginBottom: 0,
                }}
              >
                Watch the tutorial
              </Typography>
            </Button>
            <Button
              onClick={() => {
                navigate("/quiz");
              }}
              variant="contained"
              sx={{
                margin: "10px",
                color: "black",
                padding: 5,
                height: "200px",
                width: "200px",
                borderRadius: "15px",
                border: "2px solid #6C2669",
                backgroundColor: "#411C58",
                "&:hover": {
                  backgroundColor: "#8B4073",
                },
              }}
            >
              <Typography
                gutterBottom
                component="div"
                sx={{
                  color: "#FFF",
                  fontSize: "1.5rem",
                  fontFamily: "Patrick Hand, cursive",
                  fontWeight: "bold",
                  marginBottom: 0,
                }}
              >
                Take a quiz
              </Typography>
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#3775A8",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 2,
            padding: "10px",
          }}
        >
          Loading...
        </Box>
      )}
    </Box>
  );
}
