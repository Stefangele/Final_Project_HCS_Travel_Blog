import { FaDoorOpen, FaEdit } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src="/Logo.jpg" width="100" height="100" />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Nature Travel Blog</a>
        </div>

        <div className="navbar-end">
          <a className="navbar-item">Contact</a>
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
