const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const todoSchema = require('../models/Todotaks');
router.post('/createtask', (req, res, next) => {
    try {
        const task = new todoSchema({
            _id: mongoose.Types.ObjectId(),
            task: req.body.task,
        })
        task.save()
            .then((result) => {
                res.status(201).json({
                    message: "Task Created",
                    task: task
                })
            })
            .catch((err) => {
                res.status(500).json({
                    error: err,
                });
            });
    } catch (error) {
        res.status(500).json({
            error: err,
        });
    }


});
router.get('/deletebyId/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: "deleted ",
        id: id,
    })
});
router.get('/getalltask', (req, res, next) => {
    todoSchema.find()
        .exec()
        .then(doc => {
            const response = {
                count: doc.length,
                tasks: doc,
            }
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(404).json({
                error: err
            })
        })
})
router.patch('/updatebyId/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: "updated",
        id: id
    })
})
module.exports = router;