import { Review as ReviewType } from "../../types/review";

type ReviewProps = {
  review: ReviewType;
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

function Review({ review }: ReviewProps) {
  const { date, user, comment, rating } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div
          className={`reviews__avatar-wrapper user__avatar-wrapper ${
            user.isPro ? "user__avatar-wrapper--pro" : ""
          }`}
        >
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${(rating / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {formatDate(date)}
        </time>
      </div>
    </li>
  );
}

export { Review };
