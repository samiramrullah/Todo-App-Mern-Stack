const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose=require('mongoose')
const bodyParser = require('body-parser');
const task = require('./routes/task');

const db='mongodb://localhost:27017/TodoList';


// connecting to mongo db
mongoose.connect(db).then(()=>{
    console.log('connection successful');
}).catch((err)=>console.log('Error'))
mongoose.Promise=global.Promise;


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
