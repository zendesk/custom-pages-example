require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
    generateToken: (req, res) => {
        const key = req.body.key;
        const user = {
            id: process.env.SYSTEM_USER_ID,
            name: process.env.SYSTEM_USER_NAME
        };
        
        // Verify supplied key
        if (key===process.env.USER_KEY) {
            // Return JWT token
            jwt.sign({user}, process.env.SHARED_SECRET, {expiresIn: '360s'}, (err, token) => {
                if (err) {
                    return res.status(403).send({error:'Failed to generate token'});
                }
                else {  
                    return res.json({token});
                }
            });
        }
        else {
            return res.status(401).send({error:'Invalid credentials'});
        }
    },
    authenticateToken : (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader ? authHeader.split(' ')[1] : '';
  
    // Check whether a token is present
    if (token == null) {
        return res.status(401).send({error:'Invalid credentials'});
    }
    
    // Verify the token
    jwt.verify(token, process.env.SHARED_SECRET, (err) => {
      if (err) {
        console.log(err);
        return res.status(403).send({error:'Invalid token'});
      }
  
      next();
    })
  }
};
