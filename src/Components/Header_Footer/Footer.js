import React from "react";
import { CityLogo } from "../ui/icons";

const Footer = () => {
  return (
    <footer className="bck_blue" style={{ padding: "24px 0" }}>
      <div className="footer_logo" style={{ marginBottom: 8 }}>
        <CityLogo links={true} linkTo="/" height="80px" width="80px" />
      </div>
      <div className="footer_discl">Dammyayans 2020. All rights resevered</div>
    </footer>
  );
};

export default Footer;
