import React, { ChangeEvent, FormEvent } from "react";
import { JSX } from "react";
import { RATINGS } from "../../const";

function ReviewForm(): JSX.Element {
  const [review, setReview] = React.useState<string>("");
  const [rating, setRating] = React.useState<number>(0);
  
  const handleReviewChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setReview("");
    setRating(0);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((item) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={item.value}
              id={item.value + "-stars"}
              type="radio"
              checked={rating === item.value}
              onChange={handleRatingChange}
            ></input>
            <label
              htmlFor={item.value + "-stars"}
              className="reviews__rating-label form__rating-label"
              title={item.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleReviewChange}
      ></textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;