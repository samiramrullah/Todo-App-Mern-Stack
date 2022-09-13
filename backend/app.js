const express=require('express');
const app=express();
const task=require('./routes/task');


app.use('/task',task);
module.exports=app;
