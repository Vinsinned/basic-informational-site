const express = require('express');
const app = express();
const fs = require('fs');

const host = 'localhost';
const port = 8080;

app.get('/', (req, res) => {
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
});
app.get('/about', (req, res) => {
	fs.readFile('./about.html', function (err, data) {
		if (err) {
			response.writeHead(404);
			throw err; 
		}  
		else {
			res.write(data);  
			res.end(); 
		}
	});
});
app.get('/contact-me', (req, res) => {
	fs.readFile('./contact-me.html', function (err, data) {
		if (err) {
			response.writeHead(404);
			throw err; 
		}  
		else {
			res.write(data);  
			res.end(); 
		}
	});
});
app.get('*', (req, res) => {
	fs.readFile('./404.html', function (err, data) {
		if (err) {
			response.writeHead(404);
			res.end('<h1>ERROR 404</h1>')
			throw err; 
		}  
		else {
			res.write(data);  
			res.end(); 
		}
	});
});

app.listen(port, function (err) {
    if(err){
        console.log("error while starting server");
    }
    else{
        console.log("server has been started at port "+port);
    }
})