const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../Models/listing.js");
const { init } = require("../Models/user.js");
const { object } = require("joi");
main().then(()=>{
    console.log(" connected to database")})
    .catch((err)=>{
        console.log(err);
    });

async function main(params) {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
    
}



const initDB= async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj, owner:"699773ad5aa9127433cc0d04"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
};

initDB();