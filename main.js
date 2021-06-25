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
    if (req.url === '/file-upload' && req.method === 'POST') {
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
