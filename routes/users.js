const express = require("express");
const router = express.Router({mergeParams : true});
const User = require("../Models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport=require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController=require("../Controller/users.js");


router.route("/signup")
// create user SignUp   GET
.get(
    userController.renderSignUpForm
)
// Create user SignUp POST
.post(wrapAsync(userController.signUp));


  router.route("/login")
.get(userController.renderLoginForm)
.post(
   saveRedirectUrl,
   passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true
   }),
   userController.login,
);


//create logout  GET
router.get("/logout", userController.logout);

module.exports = router;
