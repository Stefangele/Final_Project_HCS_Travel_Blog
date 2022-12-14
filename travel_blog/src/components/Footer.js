import "bulma-social/css/all.min.css";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer has-background-success">
      <div className="content has-text-centered">
        <p>
          <strong>Nature Travel Blog</strong> by{" "}
          <a href="https://github.com/Stefangele">Stefan Angele</a>.
        </p>
        <a
          className="button is-medium is-facebook m-1"
          href="https://www.facebook.com/angelestf"
        >
          <span className="icon has-background-facebook-dark">
            <FaFacebook />
          </span>
        </a>
        <a
          className="button is-medium is-instagram m-1"
          href="https://www.instagram.com/stefan_gele/?hl=de"
        >
          <span className="icon has-background-instagram-dark">
            <FaInstagram />
          </span>
        </a>
        <a
          className="button is-medium is-github m-1"
          href="https://github.com/Stefangele"
        >
          <span className="icon has-background-github-dark">
            <FaGithub />
          </span>
        </a>
        <p className="mt-4">
          <strong>A project</strong> of{" "}
          <a href="https://hamburgcodingschool.com/">Hamburg Coding School</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
