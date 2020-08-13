var RoleService = require('../services/role');



module.exports.getList = function (req, res) {
    var page = req.query.page || 1;
    return RoleService.getList(page)
        .then(function (roles) {
            res.json(roles);
        })
        .catch(function (error) {
            res.json({message: error})
        });
};

module.exports.getQuery = async(req, res)=>{
    return RoleService.get(req, res)
        .then(function (roles) {
            res.json(roles);
        })
        .catch(function (error) {
            res.json({message: error})
        });
};

module.exports.create = function (req, res) {
    return RoleService.create(req,res);
};

module.exports.update = function (req, res) {
    return RoleService.update(req,res);
};

module.exports.delete = function (req, res) {
    return RoleService.delete(req,res);
};
