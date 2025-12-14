import { Review } from "../types/review";

export const mockReviews: Review[] = [
  {
    id: "1",
    date: "2019-04-24",
    user: {
      name: "Max",
      avatarUrl: "/img/avatar-max.jpg",
      isPro: false,
    },
    comment:
      "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.",
    rating: 4,
  },
  {
    id: "2",
    date: "2023-03-15",
    user: {
      name: "Alex",
      avatarUrl: "/img/avatar-max.jpg",
      isPro: true,
    },
    comment:
      "Great location, very clean apartment. The host was extremely helpful and responsive. Would definitely stay here again!",
    rating: 5,
  },
  {
    id: "3",
    date: "2023-02-28",
    user: {
      name: "Sophie",
      avatarUrl: "/img/avatar-max.jpg",
      isPro: true,
    },
    comment:
      "Beautiful apartment with amazing views. The neighborhood is lovely and there are plenty of restaurants nearby.",
    rating: 4.5,
  },
  {
    id: "4",
    date: "2023-01-10",
    user: {
      name: "David",
      avatarUrl: "/img/avatar-max.jpg",
      isPro: false,
    },
    comment:
      "The apartment was exactly as described. Very cozy and perfect for our weekend getaway. Highly recommended!",
    rating: 4,
  },
  {
    id: "5",
    date: "2022-12-05",
    user: {
      name: "Emma",
      avatarUrl: "/img/avatar-max.jpg",
      isPro: true,
    },
    comment:
      "Lovely stay! The apartment is beautifully decorated and in a perfect location. Will definitely come back.",
    rating: 5,
  },
];
