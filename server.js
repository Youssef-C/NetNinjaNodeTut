const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-type', 'text/html');

    let path = './views/';
    //Switch statement, checks what case is true and deliveres a certain page based on that
    switch(req.url) {
        case '/':
            //Appends index.html to the above path
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default: 
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //Send an HTML File
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })
}); 

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
}); 