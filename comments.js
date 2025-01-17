// Create web server

var http = require('http');
var url = require('url');
var fs = require('fs');

// Create server
http.createServer(function(req, res) {
    // Parse the request containing file name
    var pathname = url.parse(req.url).pathname;

    // Print the name of the file for which request is made.
    console.log('Request for ' + pathname + ' received.');

    // Read the requested file content from file system
    fs.readFile(pathname.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            // Write the content of the file to response body
            res.write(data.toString());
        }
        // Send the response body
        res.end();
    });
}).listen(8081);

// Console will print the message
console.log('Server running at http://