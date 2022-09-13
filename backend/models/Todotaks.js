const mongoose = require('mongoose');

const Todo = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    task: { type: String, require: true }
})
module.exports = mongoose.model('Tasks', Todo)