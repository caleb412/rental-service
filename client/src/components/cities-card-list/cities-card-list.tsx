import { OffersList } from "../../types/offer";
import { CitiesCard } from "../cities-card/cities-card";

type CitiesCardListProps = {
  offersList: OffersList[];
  onCardHover?: (offerId: string) => void;
  onCardLeave?: () => void;
};

function CitiesCardList({
  offersList,
  onCardHover,
  onCardLeave,
}: CitiesCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((offer) => (
        <CitiesCard
          key={offer.id}
          id={offer.id}
          title={offer.title}
          type={offer.type}
          price={offer.price}
          isPremium={offer.isPremium}
          previewImage={offer.previewImage}
          rating={offer.rating}
          onMouseEnter={onCardHover}
          onMouseLeave={onCardLeave}
        />
      ))}
    </div>
  );
}

export { CitiesCardList };
