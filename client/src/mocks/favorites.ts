import { FavoriteOffer } from "../types/offer";

const favorites: FavoriteOffer[] = [
  {
    id: "bbb06a0e-3f92-446d-9a68-cb64b5d38e2b",
    title: "Cozy Apartment",
    type: "apartment",
    price: 370,
    isPremium: true,
    rating: 4.9,
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
