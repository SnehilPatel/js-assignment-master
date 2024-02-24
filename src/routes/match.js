const express = require('express');
const router = express.Router();
const MatchController = require('../controllers/match');

router.get('/matches', async (req, res, next) => {
    try {
        return res.json(await MatchController.getAllMatches());
    } catch (err) {
        return next(err);
    }
});

module.exports = router;
