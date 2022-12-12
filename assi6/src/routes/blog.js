const router = require('express').Router();
const {Blog1} = require('../models/Blog')
const bodyParser = require('body-parser')
// Your routing code goes here

router.use(bodyParser.json())

router.get('/blog',async (req,res)=>{
    let page = req.query.page;
    let search = req.query.search;
    if (page === undefined) res.json({ok:'blog'})
    else {
        try {
            let found = Blog1.find({"topic":search}).skip((page-1) * 5).limit(5);
            res.send({
                status: "success",
                result: found
            })
        }     catch(err) {
            res.status(500).json({status: "fail",
            result: err.result})
        }
    }
})
router.post('/blog',async (req,res) =>{
    try {
        let add = await Blog1.create(req.body)
        res.send({
            status: "success",
            result: add
        })
    }
    catch(err) {
        res.status(500).json({status: "fail",
        result: err.result})
    }
})

router.put("/blog/:id",async (req,res)=> {
    try {
        await Blog1.findByIdAndUpdate(req.params.id,req.body)
        let found = await Blog1.findById(req.params.id)
        res.send({
            status: "success",
            result: found
        })
    }
    catch(err) {
        res.status(500).json({status: "fail",
        result: err.result})
    }
})
router.delete("/blog/:id", async (req,res)=> {
    try {
        // let found = await Blog1.findByIdAndDelete(req.params.id
        let found = await Blog1.deleteOne({_id:req.params.id})
      
        res.send({
            status: "success",
            result: found
        })
    }
    catch(err) {
        res.status(500).json({status: "fail",
        result: err.result})
    }
})

module.exports = router;