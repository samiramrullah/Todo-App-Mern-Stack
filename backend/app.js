const express=require('express');
const app=express();
const morgan=require('morgan');
const bodyParser=require('body-parser');
const task=require('./routes/task');


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/task',task);
module.exports=app;
