import { OffersList } from "../types/offer";

export const mockNearbyOffers: OffersList[] = [
  {
    id: "bbb06b0e-3g92-446d-9a68-cb64b5d38e2b",
    title: "Sea Loft",
    type: "private room",
    price: 380,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.374444,
      longitude: 4.8825,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
    previewImage: "/img/apartment-02.jpg",
  },

  {
    id: "bbb06b0e-3g52-446d-92a68-cb64b5d38e2b",
    title: "Boldom Barn",
    type: "apartment",
    price: 330,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.378887,
      longitude: 4.9,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
    previewImage: "/img/apartment-01.jpg",
  },
  {
    id: "bbb0b9o-3g91-446d-9a68-cb64b5d38e2b",
    title: "Jordan House",
    type: "apartment",
    price: 380,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: "/img/apartment-03.jpg",
  },
];
