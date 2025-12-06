const Setting = {
  rentOffersCount: 312,
} as const;

const AppRoute = {
  Main: "/",
  Login: "/login",
  Favorites: "/favorites",
  Offer: "/offer",
} as const;

const AuthorizationStatus = {
  Auth: "AUTH",
  NoAuth: "NO_AUTH",
  Unkown: "UNKNOWN",
};

export { Setting, AppRoute, AuthorizationStatus };
