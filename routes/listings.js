const express=require("express");
const router=express.Router();
const Listing = require("../Models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema} = require("../schema.js");
const User = require("../Models/user.js");
const {isLoggedIn}=require("../middleware.js");
const {isOwner}=require("../middleware.js");
const {validateListing}=require("../middleware.js");
const ExpressError=require("../utils/ExpressError.js");

const listingController= require("../Controller/listings.js");
const multer  = require('multer')
const {storage}=require("../cloudConfig.js")
const upload = multer({ storage })




router.route("/")
// index route
.get(
  wrapAsync(listingController.index),
)
//create route
.post(
upload.single('listing[image][url]'),
    validateListing,
  wrapAsync(listingController.createListing),
)


// new route
router.get("/new",isLoggedIn, listingController.renderNewForm);


router.route("/:id")
//show route
.get(
  wrapAsync(listingController.showListing),
)
//delete route
.delete(
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.destroyListing),
)
//update route
.put(
  isLoggedIn,
  isOwner,
  upload.single('listing[image][url]'),
  validateListing,
  wrapAsync(listingController.updateListing),
);



// edit route

router.get(
  "/:id/edit",isLoggedIn,
  wrapAsync(listingController.renderEditForm),
);






module.exports=router;