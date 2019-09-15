const Author = require('../models/author');

exports.authorList = function (req,res){
    res.send('NOT IMPLEMENTED: Author list');
};

exports.authorDetail = function (req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

exports.authorCreateGet = function(req,res){
    res.send('NOT IMPLEMENTED: Author create GET');
};

exports.authorCreatePost = function(req,res){
    res.send('NOT IMPLEMENTED: Author post POST');
};

exports.authorDeleteGet = function (req,res){
    res.send('NOT IMPLEMENTED: Author delete GET');
};

exports.authorDeletePost = function (req,res){
    res.send('NOT IMPLEMENTED: Author delete post');
};

exports.authorUpdateGet = function(req,res){
    res.send('NOT IMPLEMENTED: Author update get');
};

exports.authorUpdatePost = function (req,res){
    res.send('NOT IMPLEMENTED: Author update post');
};

