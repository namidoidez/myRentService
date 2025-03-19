import { JSX } from "react";
import { Link } from "react-router-dom";
import Bookmark from "../bookmark/bookmark";
import { parseRating } from "../../utils";
import { AppRoute, BookmarkPlace, BookmarkSize } from "../../const";

type OfferCardProps = {
  id: string;
  previewImg: string;
  type: string;
  title: string;
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  onHover: (id?: string) => void;
};

function OfferCard({ id, previewImg, type, title, price, rating, isPremium, isFavorite, onHover }: OfferCardProps): JSX.Element {
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(undefined)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img
            className="place-card__image"
            src={previewImg}
            width="260"
            height="200"
            alt="Place image"
          ></img>
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark
            inBookmarks={isFavorite}
            size={BookmarkSize.MEDIUM}
            place={BookmarkPlace[AppRoute.MAIN]}
          />
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

export default OfferCard;