import { JSX } from "react";
import Header from "../../components/header/header";

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray">
      <Header />
      
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;