import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-link">
        <li>
          {" "}
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Featured</a>
        </li>
        <li>
          <a href="/">Gallery</a>
        </li>
      </div>
      <div className="social-media footer-media">
        <li>
          <a href="https://www.facebook.com" target="_blank">
            <i class="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </div>
      <h3 className="copy-right">
        copyright &copy; backroads travel tour company. all right reserved
      </h3>
    </div>
  );
}
