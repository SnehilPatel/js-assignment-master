const express = require('express');
const router = express.Router();
const NewsController = require('../controllers/news');

// Endpoint to create match news
router.post('/news/match', NewsController.createMatchNews);

// Endpoint to create tour news
router.post('/news/tour', NewsController.createTourNews);

// Endpoint to get match news by ID
router.get('/news/match/:id', NewsController.getMatchNewsById);

// Endpoint to get tour news by ID
router.get('/news/tour/:id', NewsController.getTourNewsById);

// Endpoint to get sport news by ID
router.get('/news/sport/:id', NewsController.getSportNewsById);

module.exports = router;
