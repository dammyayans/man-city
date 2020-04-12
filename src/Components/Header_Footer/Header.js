import React, { Component } from "react";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { CityLogo } from "../ui/icons";

export class Header extends Component {
  render() {
    return (
      <Appbar
        position="fixed"
        style={{
          backgroundColor: "#98C5E9",
          boxShadow: "none",
          padding: "10px 0",
          borderBottom: "2px solid #00285e",
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
              <CityLogo links="true" linkTo="/" width="70px" height="70px" />
            </div>
          </div>
          <Link to="/the_team">
            <Button color="inherit" style={{ fontSize: 18 }}>
              The Team
            </Button>
          </Link>
          <Link to="/the_matches">
            <Button color="inherit" style={{ fontSize: 18 }}>
              Matches
            </Button>
          </Link>
        </Toolbar>
      </Appbar>
    );
  }
}

export default Header;
