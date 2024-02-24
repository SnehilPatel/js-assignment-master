// news.js

const mysql = require('../lib/mysql');

const createMatchNews = async (matchId, title, description, sportId) => {
    const statement = 'INSERT INTO match_news (matchId, title, description, sportId) VALUES (?, ?, ?, ?)';
    const parameters = [matchId, title, description, sportId];
    return await mysql.query(statement, parameters);
}

const createTourNews = async (tourId, title, description) => {
    const statement = 'INSERT INTO tour_news (tourId, title, description) VALUES (?, ?, ?)';
    const parameters = [tourId, title, description];
    return await mysql.query(statement, parameters);
}

const getMatchNewsById = async (matchId) => {
    const statement = 'SELECT * FROM match_news WHERE matchId = ?';
    const parameters = [matchId];
    return await mysql.query(statement, parameters);
}

const getTourNewsById = async (tourId) => {
    const statement = 'SELECT * FROM tour_news WHERE tourId = ?';
    const parameters = [tourId];
    return await mysql.query(statement, parameters);
}

const getSportNewsById = async (sportId) => {
    const statement = 'SELECT * FROM match_news WHERE sportId = ?';
    const parameters = [sportId];
    return await mysql.query(statement, parameters);
}

module.exports = {
    createMatchNews,
    createTourNews,
    getMatchNewsById,
    getTourNewsById,
    getSportNewsById
}
