const express = require("express");
const {check, validationResult} = require ("express-validator")
const app = express();
const bodyParser = require("body-parser");
const studentArray = require("./InitialData");
const port = 8080;
app.use(express.urlencoded());
const data = [...studentArray];
let length = data.length;
// Parse JSON bodies (as sent by API clients)
//  We are using express.json() middleware to handle JSON data.
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// your code goes here

app.get("/", (req, res) => {
  res.status(200).send("good");
});

app.get("/api/student", (req, res) => {
  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ 
        status: "fail", 
        result: err });
  }
});

app.get("/api/student/:id", (req, res) => {
  try {
    const identity = Number(req.params.id);
    let result = '';
    for (let i=0;i<data.length;i++) {
        if (identity === data[i].id) {
        result = data[i];
        res.status(200).json(result);
        }
        // else {
        //     res.status(404).json({ status: "fail", result: 'data not found' }).end();
        // }
    }
  } catch (err) {
    res.status(404).json({ status: "fail", result: err });
  }
});

app.post("/api/student",
[
    check("name").matches(/^[A-Za-z\s]+$/).custom(value => {
        for (let i=0;i<data.length;i++) {
            if (value.toLowerCase() === data[i].name.toLowerCase()) {
                throw new Error('name already exists');
            }
        }
        return true;
    }),
    check("currentClass").matches(/^\d+$/),
    check("division").isLength({max:1}).matches(/^[A-Za-z\s]+$/),
],
(req,res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json(errors.array());
      } 
    else {
        data.push({id:length+=1,...req.body});
        res.header('Content-Type', 'application/x-www-form-urlencoded');
        res.status(200).send(req.body);
      }
})

app.put("/api/student/:id",
[
    check('id').custom((value) => {
        let isFlag = false;
        for (let i=0;i<data.length;i++) {
            if (Number(value) == data[i].id){
                isFlag = true;
                break;
            } 
        }
        if (!isFlag) throw new Error('id dosent exists');
        return true;
    })
],
(req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json(errors.array());
      } 
    else {
        const identity = Number(req.params.id);
        for (let i=0;i<data.length;i++) {
            if (identity === data[i].id) {
                data[i].name = req.body.name
            }
        }
        res.header('Content-Type', 'application/x-www-form-urlencoded');
        res.status(200).send(req.body);
      }
})

app.delete("/api/student/:id",
[
    check('id').custom((value) => {
        let isFlag = false;
        for (let i=0;i<data.length;i++) {
            if (Number(value) == data[i].id){
                isFlag = true;
                break;
            } 
        }
        if (!isFlag) throw new Error('id dosent exists');
        return true
    })
],
(req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(404).json(errors.array());
      } 
    else {
        try{
            const identity = Number(req.params.id);
            for (let i=0;i<data.length;i++) {
                if (identity === data[i].id) {
                    data.splice(i,1)
                }
            }
            res.status(200).send(req.body);
        }
        catch(err) {
            res.status(404).json({ status: "fail", result: err });
        }
      }
}
)
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
