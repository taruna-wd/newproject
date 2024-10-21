

// controller for 

const Listing = require("../models/listing")
// const mongoose = require("mongoose");
// const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
// const mapToken = process.env.MAP_TOKEN;
// const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.index = async (req, res) => {
    const {category} = req.query
    let allListing;
    if(category){
     allListing = await Listing.find({category})
    }else{
    allListing = await Listing.find({});

    }

    res.render("listings/index.ejs", { allListing })

};

module.exports.newform = (req, res) => {
    res.render("listings/new.ejs")
};

module.exports.show = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            req.flash("error", "Invalid listing ID.");
            return res.redirect("/");
        }
        const listing = await Listing.findById(id);
        if (!listing) {
          req.flash("error", "Listing not found");
          return res.redirect("/");
        }
        res.render("listings/show", { listing });
      } catch (error) {
        next(error);  // Handle invalid ObjectId error gracefully
      }
};


module.exports.create = async (req, res, next) => {
    
    const newListing = new Listing(req.body.listing);
    let url = req.file.path;
    let filename = req.file.filename;

    console.log(url, "..", filename)

    // newListing.owner = req.user._id;

    newListing.image = {url,filename};

    // newListing.geometry =response.body.features[0].geometry

     await newListing.save()
    req.flash("success", " new listing created")
        res.redirect("/")
};

module.exports.edit = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing })
};


module.exports.update = async (req, res) => {
    let { id } = req.params;
    const update = await Listing.findByIdAndUpdate(id, { ...req.body.listing })
    
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename; 
   
 
    update.image = {url,filename};
    await update.save();
};
 req.flash("success" , "images update ")
    res.redirect(`/${id}`)
};

module.exports.delete = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id)
    req.flash("success", "Deleted !")
    res.redirect("/")
};




