const http = require('http');

const eventHandlers = require('./eventhandlers');
const Uploader = require('./upload');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const port = 3000;
const hostName = 'localhost'

let mediaDirectory = __dirname + '/media/';
let fileUploader = new Uploader(mediaDirectory);


let requestListener = (req, res) => {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
    })
    if (req.url === '/promise-a') {
        setTimeout(() => {
            res.write('testing localhost after 5000 ms');
            res.end();
        }, 5000);
    } else if (req.url === '/promise-b') {
        setTimeout(() => {
            res.write('testing localhost, after 3000 ms');
            res.end();
        }, 3000);
    } else if (req.url === '/file-upload' && req.method === 'POST') {
        fileUploader.upload(req, res);
    } else if (req.url === '/sendmail' && req.method === 'GET') {
        let mailDetails = {
            subject: 'Account registration',
            body: 'welcome onboard, thank you for your registration',
            to: 'rax.komol@gmail.com, mujammal.salman@gmail.com'
        }
        eventEmitter.emit('sendmail', mailDetails);
        res.write('sending mail');
        res.end();
    } else if (req.url === '/check-request') {
        setTimeout(() => {
            let response = {result: 'success'};
            res.write(JSON.stringify(response));
            res.end();
        }, 5000);
    } else {
        res.write('testing localhost');
        res.end();
    }
}

let onServerRun = (res) => {
    eventHandlers(eventEmitter);
    console.log(`Server is running on localhost:${port}`);
}

http.createServer(requestListener).listen(port, hostName, onServerRun);
