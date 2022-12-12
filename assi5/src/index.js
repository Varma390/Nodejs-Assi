const http = require('http');

const httpServer = http.createServer(handleServer).listen(8081, ()=>console.log("server is listening on port 8081"))

function handleServer(req, res) {
    if(req.url === '/welcome') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Welcome to Dominos!')
        res.end()
    }
    else if(req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
    }))
        res.end()
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write("page not found")
        res.end()
    }
}
module.exports = httpServer;

// const data = 'hello'
  
//   const options = {
//           hostname: '127.0.0.1',
//           port: 5000,
//           path: '/',
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//               'Content-Length': data.length,
//               'Access-Control-Allow-Origin': '*'
//           },
//       }
  
//   const req = http.request(options, (res) => {
//           console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//           console.log(`statusCode: ${res.statusCode}`)
//           res.on('data', (chunk) => {
//             console.log(`BODY: ${chunk}`);
//           });
//           res.on('end', () => {
//             console.log('No more data in response.');
//           });
//       })
  
//   req.on('error', (error) => {
//           console.error(error)
//       })
  
//   req.write(data)
//   req.end()

// //   module.exports = httpServer;