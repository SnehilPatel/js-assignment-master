// controllers/match.js

const Sport = require('../models/sport');

const getAllSports = async (req, res, next) => {
    try {
        const sports = await Sport.getAllSports();
        return res.status(200).json(sports);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAllSports
}
