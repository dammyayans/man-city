import React from "react";
import { CityLogo } from "../ui/icons";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo links={true} linkTo="/" height="70px" width="70px" />
      </div>
      <div className="footer_discla">
        Manchester city 2020. All rights resevered
      </div>
    </footer>
  );
};

export default Footer;
