import Router from 'express'

import { getOfferReviews } from '../controllers/reviewController.js'

const router = new Router();

router.get('/offers/:id/reviews', getOfferReviews);

export default router;