const express = require('express');
const router = express.Router();

router.post('/createtask',(req,res,next)=>{
    const task=req.body.task;
    res.status(201).json({
        message:"Task Created",
    })
});
router.get('/deletebyId/:id',(req,res,next)=>{
      const id=req.params.id;
      res.status(200).json({
        message:"deleted ",
        id:id,
      })
});
router.patch('/updatebyId/:id',(req,res,next)=>{
    const id=req.params.id;
    res.status(200).json({
        message:"updated",
        id:id
    })
})
module.exports = router;