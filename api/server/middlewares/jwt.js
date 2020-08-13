var JWTService = require('../services/jwt');

module.exports = async(req, res, role = [])=> {
    var token = req.headers['authorization'];
    if (!token)
        return res.status(401).json({ message: 'Invalid token' });

    JWTService.verify(token)
        try{
            await function(decoded) {
            console.log(decoded);
            if( !(( role[0] || role[1] || role[2] ) ===  decoded.role))
                return res.status(401).json("unauthorized");

            req.userId = decoded.userId;
            
        }
        }catch(error) {
            return res.status(401).json(error);
        };
};



