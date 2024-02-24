const Tour = require('../models/tour');

const getAllTours = async (req, res, next) => {
    try {
        const tours = await Tour.getAllTours();
        return res.status(200).json(tours);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAllTours
}