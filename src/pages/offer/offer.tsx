import { JSX } from "react";
import Header from "../../components/header/header";
import OfferCard from "../../components/offer-card/offer-card";
import { FullOffer } from "../../types/offer";
import { useParams } from "react-router-dom";
import NotFound from "../not-found/not-found";
import { parseRating } from "../../utils";
import ReviewForm from "../../components/review-form/review-form";
import OfferReviewList from "../../components/offer-review-list/offer-review-list";
import { reviews } from "../../mocks/reviews";
import OfferCardList from "../../components/offer-card-list/offer-card-list";
import { AppRoute, BookmarkPlace, BookmarkSize, OfferListPlace } from "../../const";
import Bookmark from "../../components/bookmark/bookmark";

type OfferProps = {
  offers: FullOffer[];
};

function Offer({ offers }: OfferProps): JSX.Element {
  const params = useParams();
  const offer = offers.find((offer) => offer.id === params.id);

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

          <section className="offer__map map"></section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OfferCardList fullOffers={offers.filter(o => o.id !== offer.id)} place={OfferListPlace[AppRoute.OFFER]} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;