const http = require('http');

let requestListener = (req, res) => {

    if (req.url == '/hello') {

        let data = {FirstName: 'John', LastName: 'Doe', Age: 32, Country: 'Bangladesh'};
        res.end(JSON.stringify(data));

    } else if (req.url == '/') {

        res.end('<html><body><p>Welcome to nodejs server</p></body></html>');

    } else {

        res.end('<html><body><p>404! page not found</p></body></html>');

    }
}

http.createServer(requestListener).listen(3000, () => {
    console.log(`server is running on port ${3000}`)
});
