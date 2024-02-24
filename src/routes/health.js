const express = require('express');
const router = express.Router();

router.get('/health', async (req, res, next) => {
    try {
        return res.json({ status: 'OK' });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;
