enum AppRoute {
  MAIN = "/",
  LOGIN = "/login",
  FAVORITES = "/favorites",
  OFFER = "/offer",
}

enum AuthStatus {
  AUTH,
  NO_AUTH,
  UNKNOWN,
}

export { AppRoute, AuthStatus };