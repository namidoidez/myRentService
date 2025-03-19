import { JSX } from "react";
import OfferCard from "../offer-card/offer-card";
import { FullOffer, OfferItem } from "../../types/offer";

type OfferCardListProps = {
  offerList?: OfferItem[];
  fullOffers?: FullOffer[];
  onHover: (id?: string) => void;
};

function OfferCardList({ offerList, fullOffers, onHover }: OfferCardListProps): JSX.Element {
  return (
    <>
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
              onHover={onHover}
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
              onHover={onHover}
            />
          ))}
    </>
  );
}

export default OfferCardList;