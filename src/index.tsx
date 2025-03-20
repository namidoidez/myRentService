import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/app/app";
import { offerList } from "./mocks/offer-list";
import { offers } from "./mocks/offers";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App offerList={offerList} fullOffers={offers} />
    </Provider>
  </React.StrictMode>
);