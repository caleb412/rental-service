import { CityOffer, OffersList } from "../src/types/offer";
import { CITIES_LOCATION, SortOffersType } from "../src/const";
import { SortOffer } from "./types/sort";

export function getCity(
  cityName: string,
  citiesList: typeof CITIES_LOCATION
): CityOffer {
  const foundCity = citiesList.find(
    (city) => city.name.toLowerCase() === cityName.toLowerCase()
  );

  if (!foundCity) {
    throw new Error(`City "${cityName}" not found in provided list`);
  }

  return {
    name: foundCity.name,
    location: {
      latitude: foundCity.location.latitude,
      longitude: foundCity.location.longitude,
      zoom: foundCity.location.zoom,
    },
  };
}
export function getOffersByCity(
  cityName: string,
  offers: OffersList[]
): OffersList[] {
  if (!cityName || !offers || !Array.isArray(offers)) {
    return [];
  }

  const cityNameLower = cityName.toLowerCase().trim();

  return offers.filter(
    (offer) => offer.city.name.toLowerCase().trim() === cityNameLower
  );
}

export function sortOffersByType(
  offers: OffersList[],
  type: SortOffer
): OffersList[] {
  switch (type) {
    case SortOffersType.PriceToHigh:
      return offers.sort((a, b) => a.price - b.price);
    case SortOffersType.PriceToLow:
      return offers.sort((a, b) => b.price - a.price);
    case SortOffersType.TopRated:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}
