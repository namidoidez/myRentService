import { JSX } from "react";
import { FullOffer, OfferItem } from "../../types/offer";
import OfferCard from "../offer-card/offer-card";

type OfferCardListProps = {
  offerList?: OfferItem[];
  fullOffers?: FullOffer[];
  place: string;
};

function OfferCardList({ offerList, fullOffers, place }: OfferCardListProps): JSX.Element {
  console.log(place);

  return (
    <div className={place}>
      {offerList
        ? offerList.map((offer) => (
            <OfferCard
              key={offer.id}
              id={offer.id}
              type={offer.type}
              title={offer.title}
              price={offer.price}
              rating={offer.rating}
              previewImg={offer.previewImage}
              isPremium={offer.isPremium}
              isFavorite={offer.isFavorite}
            />
          ))
        : fullOffers &&
          fullOffers.map((offer) => (
            <OfferCard
              key={offer.id}
              id={offer.id}
              type={offer.type}
              title={offer.title}
              price={offer.price}
              rating={offer.rating}
              previewImg={offer.images[0]}
              isPremium={offer.isPremium}
              isFavorite={offer.isFavorite}
            />
          ))}
    </div>
  );
}

export default OfferCardList;