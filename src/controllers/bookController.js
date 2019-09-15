const Book = require('../models/book');

exports.bookList = function(req, res) {
    res.send('NOT IMPLEMENTED: Book list');
};

exports.bookDetail = function(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

exports.bookCreateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

exports.bookCreatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

exports.bookDeleteGet = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

exports.bookDeletePost = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

exports.bookUpdateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

exports.bookUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};