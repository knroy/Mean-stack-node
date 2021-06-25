const formidable = require('formidable');
const fs = require('fs');

class Uploader {

    mediaDirectory = null;

    constructor(mediaDirectory) {
        this.mediaDirectory = mediaDirectory;
    }

    saveFile(file, callback) {
        try {
            let fileName = file.name;
            let fileOldPath = file.path;
            let fileNewPath = this.mediaDirectory + fileName;

            fs.copyFile(fileOldPath, fileNewPath, (err) => {
                if (err) callback(false);
                else callback(true);
            })

        } catch (e) {
            callback(false);
        }
    }

    upload(req, res) {

        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {

            if (!err) {
                this.saveFile(files.FirstFile, (isSaved) => {
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

    }

}

module.exports = Uploader;
