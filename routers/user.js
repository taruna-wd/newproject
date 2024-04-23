const express = require("express");
const router =  express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { route } = require("./listing");
const { saveRedirectUrl } = require("../middleware");

router.get("/signup" , async(req,res)=>{
    res.render("users/signup.ejs")
 });

router.post("/signup", wrapAsync( async(req,res)=>{
    try {
        let {username,email,password,}= req.body;
        const  newUser =  new User({email,username});
         const  newragister =  await User.register(newUser , password);
        console.log(newragister)
        req.login(newragister , (err)=>{
        if(err){
         return next(err);
         }
        })
        req.flash("success" , "  welcome to pizzasworld")
        res.redirect("/listings")

    } catch (error) {
        req.flash("error",error.message);
        res.redirect("./signup")
    }
       
   
}));
router.get("/login" , async(req,res)=>{
    res.render("users/login.ejs")
 });


 router.post("/login",
//  saveRedirectUrl,
 passport.authenticate('local', { failureRedirect: '/login' , failureFlash :true }),
 wrapAsync( async(req,res)=>{
    req.flash("success"," welcome to pizzas ")
    // let redirect =  res.locals.redirectUrl || "/listings";
    // res.redirect(redirect)
    res.redirect("/listings")
}));
router.get("/logout",async(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next()
        };
        req.flash("success" , " your are logged out")
        res.redirect("./listings")
    });
})
module.exports = router;