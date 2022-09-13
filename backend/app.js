const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const task = require('./routes/task');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')  //wildcard
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Methods', 'POST', 'GET', 'PATCH', 'DELETE')
        return res.status(200).json({});
    }
    next();
})


app.use('/task', task);
module.exports = app;
