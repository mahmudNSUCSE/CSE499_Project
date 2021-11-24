import { Outlet, Navigate } from "react-router-dom";

const PrvateRoute = () => {
  const jwt_token = window.localStorage.getItem("jwt-token");
  if (jwt_token === null) {
    return <Navigate to={"/"} />;
  } else {
    return <Outlet />;
  }
};

export default PrvateRoute;
