import { Review } from "../types/review";

const reviews: Review[] = [
  {
    id: "b1",
    comment:
      "The room was spacious and clean. The pool locked nothing like the photos",
    date: new Date("2023-04-19T21:00:00.465Z"),
    rating: 2.3,
    user: {
      name: "Isaac",
      avatarUrl: "/img/avatar-max.jpg",
      isPro: true,
    },
  },
  {
    id: "b2",
    comment:
      "The apartment was beautiful and spotless. The kitchen exceeded my expectations and looked even better than the photos. Highly recommend!",
    date: new Date("2024-06-29T21:00:00.465Z"),
    rating: 4,
    user: {
      name: "Zarina",
      avatarUrl: "/img/avatar-angelina.jpg",
      isPro: false,
    },
  },
];

export { reviews };