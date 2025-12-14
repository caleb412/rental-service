import { CityOffer } from "../src/types/offer";
import { CITIES_LOCATION } from "../src/const";

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
