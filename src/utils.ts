import { SortOffersType } from "./const";
import { OfferCity, OfferItem } from "./types/offer";
import { SortOffer } from "./types/sort";

function parseRating(num: number) {
  return (num / 5) * 100 + "%";
}

function groupOffersByCity(offerList: OfferItem[]) {
  const groupedOffers: {
    [cityName: string]: { city: OfferCity; offerList: OfferItem[] };
  } = {};

  for (const offer of offerList) {
    const city = offer.city;
    const cityName = city.name;

    if (!groupedOffers[cityName]) {
      groupedOffers[cityName] = { city: city, offerList: [] };
    }

    groupedOffers[cityName].offerList.push(offer);
  }

  return groupedOffers;
}

function sortOffers(offers: OfferItem[], type: SortOffersType): OfferItem[] {
  switch (type) {
    case SortOffersType.PRICE_TO_HIGH:
      return offers.sort((a, b) => a.price - b.price);
    case SortOffersType.PRICE_TO_LOW:
      return offers.sort((a, b) => b.price - a.price);
    case SortOffersType.TOP_RATED:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}

function getCity(cityName: string, src: OfferCity[]) {
  return src.filter((city) => city.name === cityName)[0];
}

function formatDate(date: Date) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthNames[monthIndex]} ${year}`;
}

export { parseRating, groupOffersByCity, sortOffers, getCity, formatDate };