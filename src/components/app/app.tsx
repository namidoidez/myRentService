import { JSX } from "react";
import { AppRoute, AuthStatus } from "../../const";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../pages/main/main";
import Favorites from "../../pages/favorites/favorites";
import Offer from "../../pages/offer/offer";
import Login from "../../pages/login/login";
import NotFound from "../../pages/not-found/not-found";
import PrivateRoute from "../private-route/private-route";
import { FullOffer, OfferItem } from "../../types/offer";

type AppMainPageProps = {
  offerList: OfferItem[];
  fullOffers: FullOffer[];
};

function App({ offerList, fullOffers }: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.MAIN}
          element={<Main offerList={offerList} />}
        ></Route>
        <Route path={AppRoute.LOGIN} element={<Login />}></Route>
        <Route
          path={AppRoute.FAVORITES}
          element={
            <PrivateRoute authStatus={AuthStatus.AUTH}>
              <Favorites offerList={offerList} />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path={`${AppRoute.OFFER}/:id`}
          element={<Offer offers={fullOffers} />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;