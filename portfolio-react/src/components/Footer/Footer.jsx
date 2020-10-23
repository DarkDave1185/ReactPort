import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <span>PortfolioReact</span>
      <span> {"Copyright © "} </span>
      <span> {new Date().getFullYear()} </span>
    </footer>
  );
}

export default Footer;
