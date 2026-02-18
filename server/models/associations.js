import { User } from './user.js';
import { Offer } from './offer.js';
import { Review } from './review.js';

// Offer author
Offer.belongsTo(User, { as: 'author', foreignKey: 'authorId' });
User.hasMany(Offer, { as: 'offers', foreignKey: 'authorId' });

// Reviews
Review.belongsTo(User, { as: 'author', foreignKey: 'userId' });
User.hasMany(Review, { as: 'reviews', foreignKey: 'userId' });

Review.belongsTo(Offer, { as: 'offer', foreignKey: 'offerId' });
Offer.hasMany(Review, { as: 'reviews', foreignKey: 'offerId' });
