import { JSX } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

function Logo(): JSX.Element {
  return (
    <Link className="footer__logo-link" to={AppRoute.MAIN}>
      <img
        className="footer__logo"
        src="/img/logo.svg"
        alt="Rent service logo"
        width="64"
        height="33"
      ></img>
    </Link>
  );
}

export default Logo;