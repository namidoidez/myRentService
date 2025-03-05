import { JSX } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import Logo from "../logo/logo";

function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <Logo />
    </footer>
  );
}

export default Footer;