

const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 4000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here


function Validation(task,num1,num2,callback) {
    // for removing '/' from route
    // console.log([num1,num2]);
    const reg = new RegExp('/'); // /add => add
    task = task.replace(reg,'');
    let [result,mess,err] = [null,0,false] ;
    // if nums are not of type numbers
    if ((isNaN(num1) && isNaN(num2))) { // 
        [mess,err] =["Invalid data types",true];
        return callback(err,mess)
    }
    [num1,num2] = [parseInt(num1),parseInt(num2)]
    // for finding the type of operation and calculating the result
    switch(task) {
        case 'divide':
            // if num2 is 0 call the result function here itself and our validation will exit
            if (num2===0) {
                [mess,err] =["Cannot divide by zero",true];
                return callback(err,mess)
            } 
            else {
                mess = "the divison of given two numbers";
                result = num1/num2;
            }
            break;
        case 'add':
            mess ="the sum of given two numbers";
            result = num1+num2;
            break;
        case 'sub':
            mess ="the difference of given two numbers";
            result = num1-num2;
            break;
        case 'mutiply':
            mess ="the product of given two numbers";
            result = num1*num2;
            break;
        default:
            break;
    }
    // chcecking for other type of errors
    if (num1 <= -(10**6)|| num2 <= -(10**6)|| result <= -(10**6)) [mess,err] =["Underflow",true]
    else if (num1 >= (10**6)|| num2 >= (10**6)|| result >= (10**6)) [mess,err] =["Overflow",true]
    return callback(err,mess,result); 
}
function Result(err,mess,result) {
    if (err) {
        // if error return this object
        return ({
            status : "error",
            message : mess,
            operation_result : "no answer"
        })
    }
    else {
        return ({
            status : "success",
            message : mess,
            operation_result : result
        })
    }
}
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.post('/add',(req,res)=>{
    const [num1,num2,url] = [req.body.num1,req.body.num2,req.url];
    console.log([num1,num2,url]);
    const obj = Validation(url,num1,num2,Result);
    res.send(obj)
})
app.post('/sub',(req,res)=>{
    const [num1,num2,url] = [req.body.num1,req.body.num2,req.url];
    const obj = Validation(url,num1,num2,Result);
    res.send(obj)
})
app.post('/multiply',(req,res)=>{
    const [num1,num2,url] = [req.body.num1,req.body.num2,req.url];
    const obj = Validation(url,num1,num2,Result);
    res.send(obj)
})
app.post('/divide',(req,res)=>{
    const [num1,num2,url] = [req.body.num1,req.body.num2,req.url];
    const obj = Validation(url,num1,num2,Result);
    res.send(obj)
})
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;