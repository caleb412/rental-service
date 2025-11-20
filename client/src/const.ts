const Setting = {
  rentOffersCount: 312,
} as const;

const AppRoute = {
  Main: "/",
  Login: "/login",
  Favorites: "/favorites",
  Offer: "/offer/:id",
} as const;

export { Setting, AppRoute };
