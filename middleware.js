module.exports.islogIn = (req,res,next)=>{
    // console.log(req.path , ".." ,req.originalUrl)
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must  be logged to created new listing");
        return res.redirect("/login")
     };
    next();
};

 module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl
    };
    next();
};