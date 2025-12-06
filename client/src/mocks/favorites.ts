import { FavoriteOffer } from "../types/offer";

const favorites: FavoriteOffer[] = [
  {
    id: "1",
    title: "Nice, cozy, warm big bed apartment",
    type: "Apartment",
    price: 180,
    isPremium: true,
    rating: 5,
    city: "Amsterdam",
    image: "/img/apartment-small-03.jpg",
    isFavorite: true,
  },
  {
    id: "2",
    title: "Wood and stone place",
    type: "Private Room",
    price: 80,
    isPremium: false,
    rating: 4,
    city: "Amsterdam",
    image: "/img/room-small.jpg",
    isFavorite: true,
  },
  {
    id: "3",
    title: "White Castle",
    type: "Apartment",
    price: 180,
    isPremium: true,
    rating: 4,
    city: "Cologne",
    image: "/img/apartment-small-04.jpg",
    isFavorite: true,
  },
];

export { favorites };
