const fs = require('fs/promises');
const http = require('http');

async function ReadDataCreate() {
    try {
        let data = await fs.readFile('read.txt')
        await fs.writeFile('index.html',data)
    }
    catch(err) {
        console.log(err)
    }
}

const readToServer = async (fileName) => {
    try{
        let data = await fs.readFile(fileName);
        http.createServer((request,response) => {
            response.writeHead(200,{"content-Type":"text/html"})
            response.write(data);
            response.end();
        }).listen(5000)
    }
    catch(err) {
        console.log(err)
    }
}

ReadDataCreate();
readToServer('index.html');
