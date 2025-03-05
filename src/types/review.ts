type ReviewUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type Review = {
  id: string;
  date: Date;
  user: ReviewUser;
  comment: string;
  rating: number;
};

type ReviewRating = {
  value: number;
  title: string;
};

export { Review, ReviewRating };
