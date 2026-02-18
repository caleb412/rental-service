import { Review } from "../models/review.js";
import { User } from "../models/user.js";
import ApiError from "../error/ApiError.js";


export async function getOfferReviews(req, res, next) {
  try {
    const { id } = req.params;

    const reviews = await Review.findAll({
      where: { OfferId: id },
      include: {
        model: User,
        as: 'author'
      },
      order: [['publishDate', 'DESC']]
    });

    return res.json(reviews);

  } catch (error) {
    next(ApiError.internal('Failed to load reviews'));
  }
}
