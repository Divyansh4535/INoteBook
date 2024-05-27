const jwt = require("jsonwebtoken");
const jwtSecret = "imbest";

const fetchuser =(req,res,next) =>{
    // get the user from the jwt token and add id to req object
    const token = req.header("auth-token");
    if(!token) {
        res.status(401).send ({error: "please authenticate using a  valid token"})
    }
    try {
        const string = jwt.verify(token, jwtSecret)
        req.user =string.user;
        next();
        
    } catch (error) {
        res.status(401).send ({error: "please authenticate using a  valid token"})
    }
}

module.exports = fetchuser;