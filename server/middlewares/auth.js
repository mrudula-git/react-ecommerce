const admin = require('../firebase');

exports.authCheck =async (req, res,next ) => {
    console.log("hi");
    // get token
    // console.log(req.headers); 
    try{
        // validate token
        console.log(req.headers.authtoken);
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.authtoken);
        console.log('FIREBASE USER IN AUTHCHECK', firebaseUser);
        req.user = firebaseUser;
        next()
    }
    catch(err){
        console.log(err);
        res.status(401).json({
            err: 'Invalid or expired token',
        })
    }
    // callback();
}

exports.demo = (req,res,next)=>{
console.log("hello guys")
next()
}