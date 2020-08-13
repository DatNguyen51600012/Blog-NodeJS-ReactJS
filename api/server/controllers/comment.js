var CommentService = require('../services/comment');



module.exports.getList = function (req, res) {
    var page = req.query.page || 1;
    return CommentService.getList(page)
        .then(function (comments) {
            res.json(comments);
        })
        .catch(function (error) {
            res.json({message: error})
        });
};

module.exports.getQuery = async(req, res)=>{
    return CommentService.get(req, res)
        .then(function (comments) {
            res.json(comments);
        })
        .catch(function (error) {
            res.json({message: error})
        });
};

module.exports.create = function (req, res) {
    return CommentService.create(req,res);
};

module.exports.update = function (req, res) {
    return CommentService.update(req,res);
};

module.exports.delete = function (req, res) {
    return CommentService.delete(req,res);
};
