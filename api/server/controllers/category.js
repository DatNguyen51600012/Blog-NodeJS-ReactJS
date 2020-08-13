var CategoryService = require('../services/category');



module.exports.getList = function (req, res) {
    var page = req.query.page || 1;
    return CategoryService.getList(page)
        .then(function (categories) {
            res.json(categories);
        })
        .catch(function (error) {
            res.json({message: error})
        });
};

module.exports.getQuery = async(req, res)=>{
    return CategoryService.get(req, res)
        .then(function (categories) {
            res.json(categories);
        })
        .catch(function (error) {
            res.json({message: error})
        });
};

module.exports.create = function (req, res) {
    return CategoryService.create(req,res);
};

module.exports.update = function (req, res) {
    return CategoryService.update(req,res);
};

module.exports.delete = function (req, res) {
    return CategoryService.delete(req,res);
};

