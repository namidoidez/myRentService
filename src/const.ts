const Setting = { 
    rentOffersCount: 312,
} as const;

enum AppRoute {
    MAIN = '/',
    LOGIN = '/login',
    FAVORITES = '/favorites',
    OFFER = '/offer/:id',
};

enum AuthStatus {
    AUTH,
    NO_AUTH,
    UNKNOWN,
};

export { Setting, AppRoute, AuthStatus }