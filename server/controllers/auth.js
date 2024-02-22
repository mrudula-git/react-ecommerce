const User = require("../models/user")

exports.createOrUpdateUser = async (req, res)=>{
    const {email, name, picture} = req.user;
console.log(req.user);
    // if user available it updte if not then create 
    const user = await User.findOneAndUpdate({email: email}, {name: name, picture: picture}, {new: true});

    if(user) {
        console.log("user updated",user);
        res.json(user)
    }
    else {
        const newUser = await new User({
            email,
            name, 
            picture,
        }).save();
        res.json(newUser);
    }
};


exports.done = (req,res,next)=>{
    console.log("done")
    return "done"
}