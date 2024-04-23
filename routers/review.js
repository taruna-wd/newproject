
const express = require("express");
const router =  express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {reviewSchema} = require("../schema.js")
const Review = require("../models/reviews.js");

const Listing = require("../models/listing.js");


const validateReview = (req,res,next)=>{

   let  {error} = reviewSchema.validate(req.body);
   // console.log( result);
   if(error){
     let errMsg = error.details.map((el)=>el.message).join(",");
 
     throw new ExpressError(400,errMsg)
   }else{
      next()
   }
 };

// reviews Post route 

router.post("/",
// validateReview ,
wrapAsync(async (req, res) => {
   //find listing by id
   const {id}= req.params;
   console.log(id)

   let listing = await Listing.findById(id);
   
   console.log(listing)
   if(!listing){
      return res.send("no such listings found")
   }
   //crate new review using tha reqesr body
   let newReview = new Review(req.body.review);

   listing.reviews.push(newReview);

   await newReview.save();
   await listing.save();

   console.log("Saved review");
   // res.send("Review saved");
   res.redirect(`/listings`);
}));


  router.delete("/:reviewId",wrapAsync(async(req,res)=>{
    let {id,reviewsId} = req.params ;
    await Listing.findByIdAndUpdate(id,{$pull :{reviews:reviewsId}});
     await Review.findByIdAndDelete(reviewsId);
}));
 
module.exports = router;