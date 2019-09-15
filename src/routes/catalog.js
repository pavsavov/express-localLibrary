const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');
const authorController = require('../controllers/authorController');
const bookinstanceController = require('../controllers/bookinstanceController');
const genreController = require('../controllers/genreController');
const homeController = require('../controllers/homeController');

//HOME ROUTES
router.get('/', homeController.index);

//BOOK ROUTES

//Create
router.get('/book/create',bookController.bookCreateGet);
router.post('/book/create',bookController.bookCreatePost);

//Delete
router.get('/book/:id/delete',bookController.bookDeleteGet);
router.post('/book/:id/delete',bookController.bookDeletePost);

//Update
router.get('/book/:id/update',bookController.bookUpdateGet);
router.post('/book/:id/update',bookController.bookCreatePost);

//Listing one or all books
router.get('/book/:id',bookController.bookDetail);
router.get('/books',bookController.bookList);

//AUTHOR ROUTES

//Create
router.get('/author/create',authorController.authorCreateGet);
router.post('/author/create',authorController.authorCreatePost);

//Delete
router.get('/author/:id/delete',authorController.authorDeleteGet);
router.post('/author/:id/delete',authorController.authorDeletePost);

//Update
router.get('/author/:id/update',authorController.authorUpdateGet);
router.post('/author/:id/update',authorController.authorUpdatePost);

//Listing one or all authors
router.get('/author/:id',authorController.authorDetail);
router.get('/authors',authorController.authorList);

//GENRE ROUTES

//Create
router.get('/genre/create',genreController.genreCreateGet);
router.post('/genre/create',genreController.genreCreatePost);

//Delete
router.get('/genre/:id/delete',genreController.genreDeleteGet);
router.post('/genre/:id/delete',genreController.genreDeletePost);

//Update
router.get('/genre/:id/update',genreController.genreUpdateGet);
router.post('/genre/:id/update',genreController.genreUpdatePost);

//Listing one or all genres
router.get('/genre/:id',genreController.genreDetail);
router.get('/genres',genreController.genreList);

//BOOKINSTANCE ROUTES

//Create
router.get('/bookinstance/create',bookinstanceController.bookinstanceCreateGet);
router.post('/bookinstance/create',bookinstanceController.bookinstanceCreatePost);

//Delete
router.get('/bookinstance/:id/delete',bookinstanceController.bookinstanceDeleteGet);
router.post('/bookinstance/:id/delete',bookinstanceController.bookinstanceDeletePost);

//Update
router.get('/bookinstance/:id/update',bookinstanceController.bookinstanceUpdateGet);
router.post('/bookinstance/:id/update',bookinstanceController.bookinstanceUpdatePost);

//Listing one or all bookinstances
router.get('/bookinstance/:id',bookinstanceController.bookinstanceDetail);
router.get('/bookinstances',bookinstanceController.bookinstanceList);

module.exports = router;