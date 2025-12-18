import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
  {
    id: "bbb06a0e-3f92-446d-9a68-cb64b5d38e2b",
    title: "Cozy Apartment",
    type: "apartment",
    price: 370,
    previewImage: "/img/apartment-01.jpg",
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
    isPremium: true,
    isFavorite: true,
    rating: 4.9,
  },

  {
    id: "bbb06b0e-3g92-446d-9a68-cb64b5d38e2b",
    title: "Sea Loft",
    type: "private room",
    price: 380,
    previewImage: "/img/apartment-02.jpg",
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
    isPremium: false,
    isFavorite: true,
    rating: 4.9,
  },
  {
    id: "bbb06b0e-3g52-446d-92a68-cb64b5d38e2b",
    title: "Boldom Barn",
    type: "apartment",
    price: 330,
    previewImage: "/img/apartment-01.jpg",
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
      longitude: 4.883611,
      zoom: 16,
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.9,
  },
  {
    id: "bbb0b9o-3g91-446d-9a68-cb64b5d38e2b",
    title: "Jordan House",
    type: "apartment",
    price: 380,
    previewImage: "/img/apartment-03.jpg",
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
    isPremium: false,
    isFavorite: true,
    rating: 4.2,
  },
  {
    id: "bda09a1e-1032-448f-9b9a-cb64b5aas913b",
    title: "Friendly studio apartment",
    type: "apartment",
    price: 360,
    previewImage: "/img/apartment-03.jpg",
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.5488,
        longitude: 9.9872,
        zoom: 12,
      },
    },
    location: {
      latitude: 53.5488,
      longitude: 9.9872,
      zoom: 16,
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.7,
  },
];
