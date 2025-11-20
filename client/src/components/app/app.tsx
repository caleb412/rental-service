import { JSX } from "react";
import { MainPage } from "../../pages/main-page/main-page";
import { FavoritesPage } from "../../pages/favorites-page/favorites";
import { LoginPage } from "../../pages/login-page/login";
import { OfferPage } from "../../pages/offer-page/offer";
import { PageNotFound } from "../../pages/not-found-page/not-found";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { AppRoute } from "../../const";

type AppMainPageProps = {
  rentalOffersCount: number;
};
function App({ rentalOffersCount }: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage rentalOffersCount={rentalOffersCount} />}
        />
        <Route path={AppRoute.Favorites} element={<FavoritesPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
