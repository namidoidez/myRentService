import { createReducer } from "@reduxjs/toolkit";
import { changeCity, cityOfferList } from "./action";
import { CITIES } from "../const";
import { offerList } from "../mocks/offer-list";
import { getCity } from "../utils";

const defaultCity = getCity("Paris", CITIES);

const initState = {
  city: defaultCity,
  cityOfferList: offerList,
};

const reducer = createReducer(initState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
      state.city = action.payload;
    }).addCase(cityOfferList, (state, action) => {
      state.cityOfferList = action.payload;
    });
});

export { reducer };