
// controllers/news.js

const News = require('../models/news');

const createMatchNews = async (req, res, next) => {
    try {
        const { matchId, title, description, sportId } = req.body;
        await News.createMatchNews(matchId, title, description, sportId);
        res.status(201).send('Match news created successfully');
    } catch (error) {
        next(error);
    }
}

const createTourNews = async (req, res, next) => {
    try {
        const { tourId, title, description } = req.body;
        await News.createTourNews(tourId, title, description);
        res.status(201).send('Tour news created successfully');
    } catch (error) {
        next(error);
    }
}

const getMatchNewsById = async (req, res, next) => {
    try {
        const matchId = req.params.id;
        const news = await News.getMatchNewsById(matchId);
        res.json(news);
    } catch (error) {
        next(error);
    }
}

const getTourNewsById = async (req, res, next) => {
    try {
        const tourId = req.params.id;
        const news = await News.getTourNewsById(tourId);
        res.json(news);
    } catch (error) {
        next(error);
    }
}

const getSportNewsById = async (req, res, next) => {
    try {
        const sportId = req.params.id;
        const news = await News.getSportNewsById(sportId);
        res.json(news);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createMatchNews,
    createTourNews,
    getMatchNewsById,
    getTourNewsById,
    getSportNewsById
};

