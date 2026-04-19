const User=require("../Models/user");



module.exports.renderSignUpForm=(req, res) => {
    res.render("users/signUp.ejs");
}


module.exports.signUp=async (req, res,next) => {
    try {
        let { email, username, password } = req.body;
        const newUser = new User({
            email,
            username,
        });
        const registeredUser = await User.register(newUser, password);
        
        req.login(registeredUser,(err)=>{
            if(err){
             return next(err);
            }
            req.flash("success", "The User registered successfully....");
        return res.redirect("/listings");

        })
        

    }
    catch (e) {
        req.flash("error", e.message);
        return res.redirect("/signup");
    }
}

module.exports.renderLoginForm=(req, res) => {
    res.render("users/logIn.ejs");
}

module.exports.login=(req, res) => {
req.flash("success","Welcome Back to wanderlust,You are logged in succefully....");
let redirect=res.locals.redirectUrl || "/listings";
return res.redirect(redirect);
}

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out !");
       return  res.redirect("/listings");

    })
}