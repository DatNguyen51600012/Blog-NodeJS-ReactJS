var JWTService = require('../services/jwt');

module.exports.generateToken = function (req, res) {
    var username = req.body.username || '';
    var password = req.body.password || '';
    return JWTService.generateToken(username, password)
        .then(function (users) {
            res.status(200).json(users);
        })
        .catch(function (error) {
            res.status(401).json(error)
        });
};
