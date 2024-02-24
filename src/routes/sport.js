const express = require('express');
const router = express.Router();
const SportController = require('../controllers/sport');

router.get('/sport/tour/match', async (req, res, next) => {
    try {
        return res.json(await SportController.getAllSportsToursAndMatches());
    } catch (err) {
        return next(err);
    }
});

module.exports = router;
