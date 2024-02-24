const express = require('express');
const router = express.Router();
const TourController = require('../controllers/tour');

router.get('/tours', async (req, res, next) => {
    try {
        return res.json(await TourController.getAllTours());
    } catch (err) {
        return next(err);
    }
});

router.get('/tour/matches', async (req, res, next) => {
    try {
        let params = req.query;
        let result = await TourController.getMatchesByTourName(params);
        return res.json(result);
    } catch (err) {
        return next(err);
    }
});

module.exports = router;
