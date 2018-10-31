const jwt = require('jsonwebtoken');

module.exports = {
    validate: function(req, res, next) {
        jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
            var errMsg = "";
            if (err) {
                switch (err.message) {
                    case "jwt must be provided":
                        errMsg = "Access token must be provided!";
                    break;

                    case "invalid signature":
                        errMsg = "Invalid access token provided!";
                    break;

                    case "jwt malformed":
                        errMsg = "Access token malformed!";
                    break;
                
                    default:
                        errMsg = err.message;
                    break;
                }
                res.json({status:"error", message: errMsg});
            }else{
            // add user id to request
            req.body.userId = decoded.id;
            next();
            }
        });
    }
}