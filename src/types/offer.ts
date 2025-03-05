type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type OfferCity = {
  name: string;
  location: OfferLocation;
};

type HostOffer = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type FullOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OfferCity;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  desc: string;
  bedrooms: number;
  goods: string[];
  host: HostOffer;
  images: string[];
  maxAdults: number;
};

type OfferItem = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OfferCity;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export { OfferLocation, OfferCity, HostOffer, FullOffer, OfferItem };