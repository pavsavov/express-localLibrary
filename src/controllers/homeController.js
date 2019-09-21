const Books = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

const async = require('async');

async.parallel({
    bookCount: function (callback) {
        BookInstance.countDocuments({}, callback);
    },
    authorCount: function (callback) {
        Author.countDocuments({}, callback);
    },
    bookInstanceAvailableCount: function (callback) {
        BookInstance.countDocuments({ status: 'Available' }, callback);
    },
    bookInstanceCount: function (callback) {
        BookInstance.countDocuments({}, callback);
    },
    genreCount: function (callback) {
        Genre.countDocuments({}, callback);
    }
}, function (err, result) {
    res.render('index', { title: 'Local Library Home', error: err, data: result });
});
