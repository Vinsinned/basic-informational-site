const http = require('http');
const fs = require('fs');
const url  = require('url');

const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
	res.writeHeader(200, { "Content-Type": "text/html" });
	if (req.url == '/') {
		fs.readFile('./index.html', function (err, data) {
			if (err) {
				response.writeHead(404);
				throw err; 
			}  
			else {
				res.write(data);  
				res.end(); 
			}
		});
	} else {
		res.end('<h1>Hello im vinsonnn</h1>'); 
	}
}).listen(port);