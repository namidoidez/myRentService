import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { offerList } from "./mocks/offer-list";
import { offers } from "./mocks/offers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App offerList={offerList} fullOffers={offers} />
  </React.StrictMode>
);