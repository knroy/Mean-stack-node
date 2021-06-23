const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

const port = 3000;
const hostName = 'localhost'

let mediaDirectory = __dirname + '/media/';

let saveFile = (file, callback) => {
    try {
        let fileName = file.name;
        let fileOldPath = file.path;
        let fileNewPath = mediaDirectory + fileName;

        fs.copyFile(fileOldPath, fileNewPath, (err) => {
            if (err) callback(false);
            else callback(true);
        })

    } catch (e) {
        callback(false);
    }
}

let requestListener = (req, res) => {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': 'http://localhost:63342',
    })
    if (req.url === '/file-upload' && req.method === 'POST') {
        var form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {

            if (!err) {
                saveFile(files.FirstFile, (isSaved) => {
                    if (isSaved) {
                        let response = {'message': 'file uploading is complete'}
                        res.write(JSON.stringify(response));
                        res.end();
                    } else {
                        let response = {'message': 'file uploading failed'}
                        res.write(JSON.stringify(response));
                        res.end();
                    }
                });
            } else {
                let response = {'message': 'something went wrong, file upload failed'}
                res.write(JSON.stringify(response));
                res.end();
            }


        })
    } else {
        res.write('testing localhost');
        res.end();
    }
}

let onServerRun = (res) => {
    console.log(`Server is running on localhost:${port}`);
}

http.createServer(requestListener).listen(port, hostName, onServerRun);
