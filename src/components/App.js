import React from "react";
import Dashboard from "./storage/dashboard";
import Login from "./authentification/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./authentification/privateRoute";
import ForgetPassword from "./authentification/forgetpassword";
import { AuthProvider } from "../context/authContext";
import Profile from "./authentification/Profile";
import Signup from "./authentification/signup";
import UpdateProfile from "./authentification/UpdateProfile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />

          {/* Profile */}
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          {/* Auth */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgetPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;