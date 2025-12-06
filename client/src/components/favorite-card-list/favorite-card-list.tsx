import { FavoriteCard } from "../favorite-card/favorite-card";
import { FavoriteOffer } from "../../types/offer";

type FavoriteCardListProps = {
  offers: FavoriteOffer[];
  onFavoriteClick?: (id: string, isFavorite: boolean) => void;
};

function FavoriteCardList({ offers, onFavoriteClick }: FavoriteCardListProps) {
  const offersByCity = offers.reduce<Record<string, FavoriteOffer[]>>(
    (acc, offer) => {
      const cityName = offer.city;
      if (!acc[cityName]) {
        acc[cityName] = [];
      }
      acc[cityName].push(offer);
      return acc;
    },
    {}
  );

  if (offers.length === 0) {
    return (
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">
          Save properties to narrow down search or plan your future trips.
        </p>
      </div>
    );
  }

  return (
    <ul className="favorites__list">
      {Object.entries(offersByCity).map(([city, cityOffers]) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {cityOffers.map((offer) => (
              <FavoriteCard
                key={offer.id}
                offer={offer}
                onFavoriteClick={onFavoriteClick}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export { FavoriteCardList };
