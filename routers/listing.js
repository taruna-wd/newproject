const express = require("express");
const{listingSchema} = require("../schema.js")
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {islogIn} = require("../middleware.js");

 const router =  express.Router();
 const multer  = require('multer')
 const {storage} = require("../cloud_config.js")
const upload = multer({ storage });





 const validateListing = (req,res,next)=>{

  let  {error} = listingSchema.validate(req.body);
  console.log( result);
  if(error){
    let errMsg = error.details.map((el)=>el.message).join(",");

    throw new ExpressError(400,errMsg)
  }else{
     next()
  }
};
 // index route
router.get("/",wrapAsync(  async (req,res)=>{
  const allListing = await Listing.find({}) ;
  res.render("./listings/index.ejs",{allListing})

}));
router.post( "/",  upload.single('listing[image]'),async(req,res)=>{
  // const allListing = await Listing.find({}) ;
  res.send(req.file)

});
// new route

router.get("/new",
 islogIn,
 (req,res)=>{
  
     res.render("./listings/new.ejs")
  })


// show route
router.get("/:id" , wrapAsync(  async(req,res) =>{
 let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs" , {listing})
   }));


//create route
router.post("/" , 
// validateListing,
wrapAsync(async(req,res,next)=>{
  let url = req.file.path;
  let filename = req.file.filename;
  console.log(url, ".." ,filename)
     const  newListing = new Listing (req.body.listing);
     newListing.owner

//  await newListing.save()
//  req.flash("success!" , " new listing created")

 res.redirect("/listings")
  
  // let { title,description,image,price,location,country}= req.body ;



}));

//  edit route

router.get("/:id/edit" ,
islogIn,
wrapAsync( async (req,res)=>{
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs" , {listing })
}));

// update route

router.put("/:id",
 islogIn, 
wrapAsync (async (req,res)=>{
let {id }=  req.params;
 const update = await Listing.findByIdAndUpdate(id , { ...req.body.listing})
 res.redirect(`/listings/${id}`)
}));

// delete route

router.delete("/:id",
islogIn,
wrapAsync( async(req,res)=>{
  let {id}= req.params;
   await Listing.findByIdAndDelete(id)
  res.redirect("/listings")
}));



 module.exports = router;  