if(process.env.NODE_ENV != "production"){
    require("dotenv").config({ path: "../.env" });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(dbUrl);
}

main()
.then(() => {
    console.log("Connected to Atlas DB");
})
.catch((err) => {
    console.log(err);
});

const initDB = async () => {

    // delete old listings
    await Listing.deleteMany({});

    // add owner id to every listing
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "69f5b6d50afe4e6100dc63bb"
    }));

    // insert all listings
    await Listing.insertMany(initData.data);

    console.log("300 Listings Added Successfully");
};

initDB();