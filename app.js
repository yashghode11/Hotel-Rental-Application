if(process.env.NODE_ENV!="production"){
require('dotenv').config();
}
  

const sampledata=require("./Init/data.js");
const express = require("express");
const app = express();
const mongoose = require("mongoose");


const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session=require("express-session");
const MongoStore = require('connect-mongo');
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local").Strategy;
const User=require("./Models/user.js");

const ExpressError = require("./utils/ExpressError.js");

const listingRouter =require("./routes/listings.js");
const reviewRouter= require("./routes/reviews.js");
const userRouter= require("./routes/users.js");
const Listing = require('./Models/listing.js');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));



const atlas=process.env.ATLASDB_URL;
const sec=process.env.SECRET;

async function main(params) {
// mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
await mongoose.connect(atlas);
  

}


main()
  .then(() => {
    app.listen(8080, () => {
  console.log("the server is listening........");
});
    console.log(" connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
// app.get("/", (req, res) => {
//   res.send("HI<< the rooot is here");
// });




const store = MongoStore.create({
  mongoUrl: process.env.ATLASDB_URL,
  touchAfter: 24 * 3600,
});

store.on("error",(err)=>{
  console.log("store error...............",err);
});

const sessionOptions = {
  store,
  secret: sec,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req,res,next)=>{
  res.locals.success=req.flash("success");
  res.locals.error=req.flash("error");
  res.locals.currUser=req.user;
  next();
})

// app.get("/listings/newdata", async (req, res) => {
//   const userId = "69e2630d35da36c3a9ebaf1b"; // your user id

//   const updatedData = sampledata.map(obj => ({
//     ...obj,
//     owner: new mongoose.Types.ObjectId(userId)
//   }));

//   await Listing.deleteMany({});
//   await Listing.insertMany(updatedData);
//   console.log(updatedData);
//   res.send("Data with owner added");
// });

// created a demo user
// app.get("/demouser", async (req,res)=>{
//   const fakeUser=new User({
//     email:"yashghode2004@gmai.com",
//     username:"yash.ghode11"
//   });
//   const newRegisteredUser =await User.register(fakeUser,"123123123");
//   res.send(newRegisteredUser);
// })



app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter );
app.use("/",userRouter);






// test purpose
// app.get("/testlisting",async (req,res)=>{
//     let samplelisting=new Listing({
//         title: "Deshmukh Mangalum",
//         description:"Banquet Hall",
//         price:1200,
//         location:"near Vidyabharati Colony ,Akola Highway,Bhilkheda,Karanja (Lad),Dist. Washim ,444105",
//         country:"India"
//     });
//     await samplelisting.save();
//     console.log("sample is Saved Successfully..");
//     res.send("successfull Testing");

// })

app.use((req, res, next) => {
  next(new ExpressError(404, "Page not Found!!!!"));
});


app.use((err, req, res, next) => {
  console.log(err);

  if (res.headersSent) {
    return next(err);
  }

  let { statusCode = 500 } = err;

  res.status(statusCode).render("listings/error.ejs", { err });
});