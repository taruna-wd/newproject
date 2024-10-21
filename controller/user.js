
const User =  require("../models/user")
module.exports.signup = async(req,res)=>{
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
        req.flash("success" , "  welcome to pizzas")
        res.redirect("/")

    } catch (error) {
        req.flash("error",error.message);
        res.redirect("./signup")
    }
       
   
};
module.exports.login =async(req,res)=>{
    req.flash("success"," welcome to pizzas ")
    // let redirect =  res.locals.redirectUrl || "/listings";
    // res.redirect(redirect)
    res.redirect("/")
};

module.exports.logout = async(req,res,next)=>{
    try {
        await req.logout();  // Proper async logout
        req.flash("success", "You are logged out");
        res.redirect("/");
      } catch (err) {
        next(err);
      }
};