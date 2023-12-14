import React from "react";

function Footer() {
  return (
    <div className="footer">
      <p> All rights reserved VAP</p>
      <div className="nav">
        <a href="https://twitter.com/" target="_blank">
          <img src="./images/twitter.png" alt="" />
        </a>
        <a href="https://facebook.com/" target="_blank">
          <img src="./images/facebook.png" alt="" />
        </a>
        <a href="https://linkedin.com/" target="_blank">
          <img src="./images/linkedin.png" alt="" />
        </a>
        <a href="https://instagram.com/" target="_blank">
          <img src="./images/instagram.png" alt="" />
        </a>
      </div>
    </div>
  );
}

{
  /* {/* //   onClick={() => {
        //     window.location.href = "https://www.instagram.com/champagnepapi/";
        //   }}
        //   src="./images/instagram.png"
        //   alt="instagram"
        // /> */
}

export default Footer;
