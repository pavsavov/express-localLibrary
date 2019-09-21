const Books = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

const async = require('async');

async.parallel()

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};