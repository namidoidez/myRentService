import { JSX } from "react";
import OfferReview from "../offer-review/offer-review";
import { Review } from "../../types/review";

type OfferReviewListProps = {
  reviews: Review[];
};

function OfferReviewList({ reviews }: OfferReviewListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
          Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => 
          <OfferReview review={review} />
        )}
      </ul>
    </>
  );
}

export default OfferReviewList;