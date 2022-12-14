import { FaDoorOpen, FaEdit } from "react-icons/fa";
import { Link } from "wouter";
import React from "react";

function Navbar() {
  const [isActive, setisActive] = React.useState(false);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img src="/Logo.jpg" width="100" height="100" alt="Logo" />
          </a>
        </Link>
        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">Nature Travel Blog</a>
          </Link>
        </div>

        <div className="navbar-end">
          <Link href="/contact">
            <a className="navbar-item">Contact</a>
          </Link>
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-success">
                <strong>
                  <FaEdit /> &nbsp;New Post
                </strong>
              </a>
              <a className="button is-dark">
                <FaDoorOpen /> &nbsp;&nbsp;Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
