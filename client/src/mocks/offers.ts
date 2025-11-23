import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
  {
    id: "bbb06a0e-3f92-446d-9a68-cb64b5d38e2b",
    title: "Cozy Apartment",
    description:
      "A new, spacious, cozy apartment. One floor, all commodities. Ideal for families",
    type: "apartment",
    price: 370,
    images: ["cozy-room.jpg", "cozy-bathroom.jpg", "cozy-bedroom.jpg"],
    city: {
      name: "Paris",
      location: {
        latitude: 48.85661,
        longitude: 2.342499,
        zoom: 16,
      },
    },
    location: {
      latitude: 48.86861000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    goods: [
      "Heating",
      "Wi-Fi",
      "Fridge",
      "Laptop friendly workspace",
      "Baby seat",
      "Air conditioning",
      "Washer",
      "Towels",
      "Dishwasher",
      "Kitchen",
      "Breakfast",
      "Washing machine",
      "Coffee machine",
    ],
    host: {
      isPro: true,
      name: "Angelina",
      avatarUrl: "avatar-angelina.jpg",
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.9,
    bedrooms: 2,
    maxAdults: 3,
  },
];

export { offers };
