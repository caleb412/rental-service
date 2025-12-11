import { JSX } from "react";
import { MainPage } from "../../pages/main-page/main-page";
import { FavoritesPage } from "../../pages/favorites-page/favorites";
import { LoginPage } from "../../pages/login-page/login";
import { OfferPage } from "../../pages/offer-page/offer";
import { PageNotFound } from "../../pages/not-found-page/not-found";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { FavoriteOffer, FullOffer } from "../../types/offer";
import { OffersList } from "../../types/offer";

type AppMainPageProps = {
  rentalOffersCount: number;
  offersList: OffersList[];
  offers: FullOffer[];
  favorites: FavoriteOffer[];
};

function App({
  rentalOffersCount,
  offersList,
  offers,
  favorites,
}: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              rentalOffersCount={rentalOffersCount}
              offersList={offersList}
            />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage favorites={favorites} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferPage offers={offers} />}
        />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
