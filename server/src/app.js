const express = require('express');
const app = express();

app.use((req, res, next) => {
    now = Date.now();
    next();
    // After responding
    console.log(`${req.url} took ${Date.now()-now} ms.`);
});

app.use(express.json());

module.exports = app;