var UserService = require('../services/user');
var authLogin = require('../services/auth');


module.exports.getList = function (req, res) {
    var page = req.query.page || 1;
    return UserService.getList(page)
        .then(function (users) {
            res.json(users);
        })
        .catch(function (error) {
            res.json({message: error})
        });
};

module.exports.getQuery = async(req, res)=>{
    return UserService.get(req, res)
        .then(function (users) {
            res.json(users);
        })
        .catch(function (error) {
            res.json({message: error})
        });
};

module.exports.create = function (req, res) {
    return UserService.register(req,res);
};

module.exports.update = function (req, res) {
    return UserService.updateUser(req,res);
};

module.exports.delete = function (req, res) {
    return UserService.deleteUser(req,res);
};


module.exports.login = (req, res) =>{
    return authLogin.login(req, res);
};

