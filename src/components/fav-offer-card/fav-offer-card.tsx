import { JSX } from "react";
import { parseRating } from "../../utils";
import { Link } from "react-router-dom";
import { AppRoute, BookmarkPlace, BookmarkSize } from "../../const";
import Bookmark from "../bookmark/bookmark";

type FavOfferCardProps = {
  id: string;
  previewImg: string;
  type: string;
  title: string;
  price: number;
  rating: number;
  isPremium: boolean;
};

function FavOfferCard({ id, previewImg, type, title, price, rating, isPremium }: FavOfferCardProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img
            className="place-card__image"
            src={previewImg}
            width="150"
            height="110"
            alt="Place image"
          ></img>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark inBookmarks={true} size={BookmarkSize.MEDIUM} place={BookmarkPlace[AppRoute.FAVORITES]} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: parseRating(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavOfferCard;