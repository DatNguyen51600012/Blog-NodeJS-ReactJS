var TagService = require('../services/tag');



module.exports.getList = function (req, res) {
    var page = req.query.page || 1;
    return TagService.getList(page)
        .then(function (tags) {
            res.json(tags);
        })
        .catch(function (error) {
            res.json({message: error})
        });
};

module.exports.getQuery = async(req, res)=>{
    return TagService.get(req, res)
        .then(function (tags) {
            res.json(tags);
        })
        .catch(function (error) {
            res.json({message: error})
        });
};

module.exports.create = function (req, res) {
    return TagService.create(req,res);
};

module.exports.update = function (req, res) {
    return TagService.update(req,res);
};

module.exports.delete = function (req, res) {
    return TagService.delete(req,res);
};
