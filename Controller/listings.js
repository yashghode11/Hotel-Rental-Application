const Listing = require("../Models/listing");


module.exports.index = async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index.ejs", { allListing });
}

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
}


module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const list = await Listing.findById(id)
    .populate({
      path: "reviews", populate: { path: "author", }
    })
    .populate("owner"); 
  if (!list) {
    req.flash("error","no listing is present here");
    res.redirect("/listings");
  }
  let token=process.env.MAP_TOKEN;
  let place=list.location;
  res.render("listings/show.ejs", { list,token });
}


module.exports.createListing = async (req, res, next) => {
  // let {title,description,image,price,location,counrty}=req.body;
  let url = req.file.path;
  let filename = req.file.filename;

  console.log(url + ".." + filename);

  const nlist = new Listing(req.body.listing);
  nlist.owner = req.user._id;
  nlist.image = { url, filename };

  await nlist.save();

  req.flash("success", "New listing created successfully...");
  
  res.redirect("/listings");
}

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const elist = await Listing.findById(id);
  if (!elist) {
    req.flash("error", "the Listing does not exists");
     res.redirect("/listings");
  }

  res.render("listings/edit.ejs", { elist });
}

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if(!listing){
   req.flash("error","Listing not found");
   res.redirect("/listings");
}
  if (!listing.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "you do not have permission to edit");
  res.redirect("/listings/" + id);
  }
  await Listing.findByIdAndUpdate(id, req.body.listing);


  if (typeof req.file !== "undefined") {
    if(!req.file){
   req.flash("error","Image required");
   res.redirect("/listings/" + id + "/edit");
}
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "you have successfully updated the listing....");
 res.redirect("/listings/" + id);
}

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  const l = await Listing.findByIdAndDelete(id);
  req.flash("success", "listing Deleted successfully...");
  res.redirect("/listings");
}


