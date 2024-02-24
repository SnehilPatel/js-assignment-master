const express = require('express');
const helper = require("./src/lib/helper");
const config = require('./config/config');
const path = require('path');

const app = express();
const port = config.server.port;

const routeFiles = helper.fileList(path.join(__dirname, 'src/routes'));
routeFiles.forEach(filePath => {
    const routes = require(filePath);
    if (typeof routes === 'function') {
        app.use('/', routes);
    }
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
