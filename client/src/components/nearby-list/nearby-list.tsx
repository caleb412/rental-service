import { OffersList } from "../../types/offer";
import { NearbyCard } from "../nearby-card/nearby-card";

type NearbyListProps = {
  offers: OffersList[];
  onCardHover?: (offerId: string) => void;
  onCardLeave?: () => void;
};

function NearbyList({ offers, onCardHover, onCardLeave }: NearbyListProps) {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <NearbyCard
          key={offer.id}
          id={offer.id}
          title={offer.title}
          type={offer.type}
          price={offer.price}
          isPremium={offer.isPremium}
          previewImage={offer.previewImage}
          rating={offer.rating}
          isFavorite={offer.isFavorite}
          onMouseEnter={onCardHover}
          onMouseLeave={onCardLeave}
        />
      ))}
    </div>
  );
}

export { NearbyList };
