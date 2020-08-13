var PostService = require('../services/post');



module.exports.getList = function (req, res) {
    var page = req.query.page || 1;
    return PostService.getList(page)
        .then(function (posts) {
            res.json(posts);
        })
        .catch(function (error) {
            res.json({message: error})
        });
};

module.exports.getQuery = async(req, res)=>{
    return PostService.get(req, res)
        .then(function (posts) {
            res.json(posts);
        })
        .catch(function (error) {
            res.json({message: error})
        });
};


module.exports.create = function (req, res) {
    return PostService.create(req,res);
};

module.exports.update = function (req, res) {
    return PostService.update(req,res);
};

module.exports.delete = function (req, res) {
    return PostService.delete(req,res);
};
