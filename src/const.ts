import { OfferCity } from "./types/offer";
import { ReviewRating } from "./types/review";

enum AppRoute {
  MAIN      = "/",
  LOGIN     = "/login",
  FAVORITES = "/favorites",
  OFFER     = "/offer",
};

enum AuthStatus {
  AUTH,
  NO_AUTH,
  UNKNOWN,
};

enum SortOffersType {
  POPULAR       = "Popular",
  PRICE_TO_HIGH = "Price: low to high",
  PRICE_TO_LOW  = "Price: high to low",
  TOP_RATED     = "Top rated first",
};

const BookmarkSize = {
  MEDIUM: { width: 18, height: 19 },
  LARGE:  { width: 31, height: 33 },
};

const BookmarkPlace = {
  [AppRoute.MAIN]:      "place-card__bookmark",
  [AppRoute.OFFER]:     "offer__bookmark",
  [AppRoute.FAVORITES]: "place-card__bookmark",
};

const CITIES: OfferCity[] = [
  {
    name: "Paris",
    location: {
      latitude: 48.5112,
      longitude: 2.2055,
      zoom: 8,
    },
  },
  {
    name: "Cologne",
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 8,
    },
  },
  {
    name: "Brussels",
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 8,
    },
  },
  {
    name: "Amsterdam",
    location: {
      latitude: 52.2226,
      longitude: 4.5322,
      zoom: 8,
    },
  },
  {
    name: "Hamburg",
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 8,
    },
  },
  {
    name: "Dusseldorf",
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 8,
    },
  },
];

const URL_MARKER_DEFAULT =
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg";

const URL_MARKER_CURRENT =
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg";

const RATINGS: ReviewRating[] = [
  { value: 5, title: "perfect" },
  { value: 4, title: "good" },
  { value: 3, title: "not bad" },
  { value: 2, title: "badly" },
  { value: 1, title: "terribly" },
];

export { AppRoute, AuthStatus, SortOffersType };
export { BookmarkSize, BookmarkPlace };
export { CITIES, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, RATINGS };