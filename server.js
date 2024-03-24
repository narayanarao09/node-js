
const http = require('http')
const fs = require('fs')

// const server = http.createServer( (req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.writable('<head><link rel="stylesheet" href="#" ></head>')
//     res.write('<p>Hello This my first Node</p>')
//     res.write('<p>Hello This is Narayana Rao </p> ')
//     res.end()
// } )

const server = http.createServer( (req, res) => {
    
    //set Headers
    res.setHeader('Content-Type', 'text/html');

    // send HTML File
    // fs.readFile('./views/index.html', (error, data) => {
    //     if(error){
    //         console.log(error)
    //         res.write(error)
    //         res.end()
    //     }
    //     res.write(data)
    //     res.end()
    // })

    // Routes

    let path = './views/';
    switch(req.url){
        case '/':
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
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (error, data) => {
        if(error){
            res.write(error);
            res.end();
        }
        res.write(data);
        res.end();
    })
} )

server.listen(3001, 'localhost', () => {
    console.log(`server is running on port 3001`)
})