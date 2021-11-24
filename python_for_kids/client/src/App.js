import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import IndexPage from "./components/IndexPage";
import UserRedirectHomeRoute from "./routes/UserRedirectHomeRoute";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserRedirectHomeRoute />}>
          <Route exact path="/" element={<IndexPage />} />
        </Route>

        <Route exact path="/signin" element={<UserRedirectHomeRoute />}>
          <Route exact path="/signin" element={<SignIn />} />
        </Route>

        <Route exact path="/signup" element={<UserRedirectHomeRoute />}>
          <Route exact path="/signup" element={<SignUp />} />
        </Route>

        <Route exact path="/home" element={<PrivateRoute />}>
          <Route exact path="/home" element={<Home />} />
        </Route>
        <Route>
          <Route path="*"  element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
