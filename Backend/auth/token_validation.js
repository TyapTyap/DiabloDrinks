const jwt = require("jsonwebtoken");
module.exports = {
    checkToken: (req, res, next) => {
        //Teszt környezetben ki lehet ünti a token ellenőrzést
        if (! Number(process.env.AUTH_ON)) {
            next();
            return;
        }

        let token = req.get("authorization");
        // console.log("token validation:", token);
        if (token) {
            // Remove Bearer from string
            token = token.slice(7);
            jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
                if (err) {
                    return res.json({
                        success: 0,
                        message: "Invalid Token..."
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
                success: 0,
                message: "Access Denied! Unauthorized User"
            });
        }
    }
};