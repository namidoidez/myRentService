import { createAction } from "@reduxjs/toolkit";
import { OfferCity, OfferItem } from "../types/offer";

const changeCity = createAction("offers/changeCity", (city: OfferCity) => ({
  payload: city
}));

const cityOfferList = createAction("offers/offerList", (cityOfferList: OfferItem[]) => ({
  payload: cityOfferList
}));

export { changeCity, cityOfferList };