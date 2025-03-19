import React, { JSX } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import NotFound from "../not-found/not-found";
import ReviewForm from "../../components/review-form/review-form";
import Bookmark from "../../components/bookmark/bookmark";
import OfferReviewList from "../../components/offer-review-list/offer-review-list";
import OfferCardList from "../../components/offer-card-list/offer-card-list";
import OffersMap from "../../components/offers-map/offers-map";
import { FullOffer } from "../../types/offer";
import { parseRating } from "../../utils";
import { AppRoute, BookmarkPlace, BookmarkSize } from "../../const";
import { reviews } from "../../mocks/reviews";
import { offerList } from "../../mocks/offer-list";

type OfferProps = {
  offers: FullOffer[];
};

function Offer({ offers }: OfferProps): JSX.Element {
  const params = useParams();
  const offer = offers.filter((offer) => offer.id === params.id)[0];
  const [selectedOffer, setSelectedOffer] = React.useState<FullOffer | undefined>(offer);

  const handleSelectOffer = (id?: string) => {
    const _offer = !id ? offer : offers.find(offer => offer.id === id);
    setSelectedOffer(_offer);
  }

  if (!offer) {
    return <NotFound />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((imgUrl) => (
                <div key={imgUrl} className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src={imgUrl}
                    alt="Photo studio"
                  ></img>
                </div>
              ))}
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <Bookmark inBookmarks={offer.isFavorite} size={BookmarkSize.LARGE} place={BookmarkPlace[AppRoute.OFFER]} />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span
                    style={{ width: parseRating(offer.rating) }}
                  ></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {offer.maxAdults}
                </li>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item) => (
                    <li className="offer__inside-item">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    ></img>
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  {offer.desc.split(/\r\n|\n|\r/).map((item) => (
                    <p className="offer__text">{item}</p>
                  ))}
                </div>
              </div>

              <section className="offer__reviews reviews">
                <OfferReviewList reviews={reviews}/>
                <ReviewForm />
              </section>
            </div>
          </div>

          <section className="offer__map map">
            <OffersMap
              city={offer.city}
              offerList={offerList}
              selectedOffer={selectedOffer}
            ></OffersMap>
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OfferCardList fullOffers={offers.filter(o => o.id !== offer.id)} onHover={handleSelectOffer} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;