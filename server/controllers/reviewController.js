import { Review } from "../models/review.js";
import { User } from "../models/user.js";
import ApiError from "../error/ApiError.js";


const addReview = async (req, res, next) =>{
  try{
    const {comment, rating} = req.body;
    const offerId = req.params.offerId;
    const userId = req.user.id;
    
    if (!comment || !rating){
      return next(ApiError.badRequest('Не хватает данных для комментария'));
    }
    
    const review = await Review.create({
      text: comment,
      rating,
      authorId: userId,
      OfferId: offerId
    });
    
    res.status(201).json(review);
  }catch (error){
    console.error(error);
    next(ApiError.badRequest('Ошибка при добавлении комментария'));
  }
}

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

export {addReview};
