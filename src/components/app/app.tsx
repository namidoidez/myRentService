import { JSX } from "react";
import { AppRoute, AuthStatus } from "../../const";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../pages/main/main";
import Favorites from "../../pages/favorites/favorites";
import Offer from "../../pages/offer/offer";
import Login from "../../pages/login/login";
import NotFound from "../../pages/not-found/not-found";
import PrivateRoute from "../private-route/private-route";

type AppMainPageProps = {
  rentalOffersCount: number;
};

function App({ rentalOffersCount }: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.MAIN}
          element={<Main rentalOffersCount={rentalOffersCount} />}
        ></Route>
        <Route path={AppRoute.LOGIN} element={<Login />}></Route>
        <Route
          path={AppRoute.FAVORITES}
          element={
            <PrivateRoute authStatus={AuthStatus.NO_AUTH}>
              <Favorites />
            </PrivateRoute>
          }
        ></Route>
        <Route path={AppRoute.OFFER} element={<Offer />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;