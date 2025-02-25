const Setting = { 
    rentOffersCount: 312,
} as const;

enum AppRoute {
    MAIN = '/',
    LOGIN = '/login',
    FAVORITES = '/favorites',
    OFFER = '/offer/:id',
};

export { Setting, AppRoute }