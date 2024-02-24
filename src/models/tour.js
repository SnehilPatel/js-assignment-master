// tour.js

const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'SELECT * FROM tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
    const statement = 'SELECT m.name AS matchName, m.startTime, m.format ' +
                      'FROM matches m ' +
                      'INNER JOIN tours t ON m.tourId = t.id ' +
                      'WHERE t.name = ?';
    const parameters = [params.name];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}
