const express = require("express");
const router=express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Review=require("../Models/review.js");
const Listing = require("../Models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor}=require("../middleware.js");

const { reviewSchema} = require("../schema.js");
const listings =require("../Models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const reviewController=require("../Controller/reviews.js");








// create Reviews Route    post
router.post("/",isLoggedIn,validateReview,wrapAsync (reviewController.createReview));


// Post Delete Review Route
router.delete("/:reviewId",isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview));


module.exports=router;