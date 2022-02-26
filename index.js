const http = require('http');
var fs = require('fs');

const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
		fs.readFile('./index.html', function (err, html) {
			if (err) {
				throw err; 
			}  
			else {
				res.writeHeader(200, {"Content-Type": "text/html"});  
				res.write(html);  
				res.end(); 
			}
		});
}).listen(port);