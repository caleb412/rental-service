import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { FavoriteOffer } from "../../types/offer";

type FavoriteCardProps = {
  offer: FavoriteOffer;
  onFavoriteClick?: (id: string, isFavorite: boolean) => void;
};

function FavoriteCard({ offer, onFavoriteClick }: FavoriteCardProps) {
  const { id, title, type, price, isPremium, rating, image, isFavorite } =
    offer;

  const handleFavoriteClick = () => {
    if (onFavoriteClick) {
      onFavoriteClick(id, !isFavorite);
    }
  };
  return (
    <article className="favorites__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={image}
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${
              isFavorite ? "place-card__bookmark-button--active" : ""
            }`}
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="/img/icon-bookmark.svg"></use>
            </svg>
            <span className="visually-hidden">
              {isFavorite ? "In bookmarks" : "To bookmarks"}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: "100%" }}></span>
            <span className="visually-hidden">Rating: {rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export { FavoriteCard };
