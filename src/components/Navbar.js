import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-icon">
        <h2 className="first">
          Back<span className="second">Roads</span>
        </h2>
      </div>
      <div className="navbar-link">
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
      <div className="navbar-media social">
        <li>
          <a href="https://www.facebook.com" target="_blank">
            <i class="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
      </div>
      <div className="navbar-media hamburger">
        <li>
          <a href="" target="_blank">
            <i class="fa fa-bars"></i>
          </a>
        </li>
      </div>
    </div>
  );
}
