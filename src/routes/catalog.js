const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');
const authorController = require('../controllers/authorController');
const bookinstanceController = require('../controllers/bookinstanceController');
const bookController = require('../controllers/bookController');
const genreController = require('../controllers/genreController');
const homeController = require('../controllers/homeController');

//HOME ROUTES
router.get('/', homeController.index);

//BOOK ROUTES

//Create
router.get('/create/book',bookController.bookCreateGet);
router.post('/create/book',bookController.bookCreatePost);

//Delete
router.get('/delete/:id/book',bookController.bookDeleteGet);
