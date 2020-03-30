import React from "react";
import ReactDOM from "react-dom";
import Route from "./Route";
import { HashRouter } from "react-router-dom";
import "./Resources/css/app.css";
import { firebase } from "./firebase";

const App = props => {
  return (
    <HashRouter basename="/">
      <Route {...props} />
    </HashRouter>
  );
};
firebase.auth().onAuthStateChanged(user => {
  ReactDOM.render(<App user={user} />, document.getElementById("root"));
});
