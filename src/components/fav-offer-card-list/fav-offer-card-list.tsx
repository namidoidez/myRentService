import { JSX } from "react";
import { OfferCity, OfferItem } from "../../types/offer";
import FavOfferCard from "../fav-offer-card/fav-offer-card";

type FavOfferCardListProps = {
  city: OfferCity;
  offersList: OfferItem[];
};

function FavOfferCardList({ city, offersList }: FavOfferCardListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city.name}</span>
          </a>
        </div>
      </div>

      <div className="favorites__places">
        {offersList.map((item) => (
          <FavOfferCard
            key={item.id}
            id={item.id}
            type={item.type}
            title={item.title}
            price={item.price}
            rating={item.rating}
            previewImg={item.previewImage}
            isPremium={item.isPremium}
          />
        ))}
      </div>
    </li>
  );
}

export default FavOfferCardList;