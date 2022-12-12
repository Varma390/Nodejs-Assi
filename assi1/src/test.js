const { myFileWriter, myFileUpdater, myFileReader, myFileDeleter } = require(".")
// const fs = require('fs')
// const fs = require('fs/promises')



// myFileWriter('file.txt','hello');
// myFileUpdater('file.txt',' world');
// myFileReader('file.txt')
myFileDeleter('file.txt')


// console.log(fs.readFileSync('file.txt','utf-8'))
// fs.readFile('file.txt','utf-8',(err,data)=>{console.log(data)})
// let data = fs.readFile('file.txt',"utf-8")
// console.log(data);
// try {
    // await fs.readFile('file.txt',"utf-8")
// }
// catch(err) {
//     console.log(err);
// }

// async function callSync() {
//     let data = await fs.readFile('file.txt',"utf-8");
//     // console.log(d);

//     console.log(data);
//   }
// callSync()
// let callAsPromise = new Promise((resolve,reject) => {
//     fs.readFile('file.txt',"utf-8",(err,data)=>{
//       if (err) reject(err)
//       else resolve(data)
//     })
//   })
// //   --------consuming-----------
//   callAsPromise.then((data) => console.log(data))
//   .catch((err) => {console.log(err)})
// console.log('ravi');
// fs.readFile('file.txt',"utf-8").then((data)=>console.log(data))
// console.log('ravi');
// fs.readFile('file.txt',"utf-8",(err,data)=>{
//     if (err) throw err;
//   console.log(data);
// })
// console.log('ravi');

