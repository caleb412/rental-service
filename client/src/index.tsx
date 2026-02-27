import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app/app";
import { Setting } from "./const";
import { offers } from "./mocks/offers";
import { offersList } from "./mocks/offers-list";
import { favorites } from "./mocks/favorites";
import { store } from "./store";
import { Provider } from "react-redux";
import { ErrorMessage } from "./components/error-message/error-message";
import { checkAuthAction, fetchOffersAction } from "./store/api-actions";

store.dispatch(checkAuthAction());
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
store.dispatch(fetchOffersAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App
        rentalOffersCount={Setting.rentOffersCount}
        offersList={offersList}
        offers={offers}
        favorites={favorites}
      />
    </Provider>
  </React.StrictMode>
);
