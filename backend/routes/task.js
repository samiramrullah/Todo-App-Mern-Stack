const express = require('express');
const router = express.Router();


// router.get('/createtask', (req, res, next) => {
//     res.status(201).json({
//         message: "task added",
//     })
// });

// router.post('/deleteall', (req, res, next) => {
//     res.status(202).json({
//         message: "Delete api",
//     })
// });

// router.get("/posts/:id",(req,res,next)=>{
//     const id=req.params.id;
//     console.log(id);
//     res.status(200).json({
//         id:id,
//     })
// })
router.get('/deletebyId/:id',(req,res,next)=>{
      const id=req.params.id;
      res.status(200).json({
        message:"deleted ",
        id:id,
      })
});
// router.post('/editbyId/:id',(req,res,next)=>{
//     const id=usePrams(id);
//     res.status(204).json({
//         message:'edited',
//         id:id,
//     })
// })
module.exports = router;