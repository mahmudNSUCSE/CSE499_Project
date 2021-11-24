import { Outlet, Navigate } from "react-router-dom";

const UserRedirectHomeRoute = () => {
  const jwt_token = window.localStorage.getItem("jwt-token");
  if (jwt_token !== null) {
    return <Navigate to={"/home"} />;
  } else {
    return <Outlet />;
  }
};

export default UserRedirectHomeRoute;
