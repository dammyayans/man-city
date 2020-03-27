import React from "react";
import ReactDOM from "react-dom";
import Route from "./Route";
import { BrowserRouter } from "react-router-dom";
import "./Resources/css/app.css";
import { firebase } from "./firebase";

const App = props => {
  return (
    <BrowserRouter>
      <Route {...props} />
    </BrowserRouter>
  );
};
firebase.auth().onAuthStateChanged(user => {
  ReactDOM.render(<App user={user} />, document.getElementById("root"));
});
