const fs = require('fs');
const uc = require('upper-case');

let hello = 'Hello World';

console.log(uc.upperCase(hello));

console.log('test')

console.log('restarting automatically')


let readAndAppendFile = () => {

    fs.readFile('hello2.txt', {encoding: 'utf8'}, (err, data) => {

        fs.appendFile('hello.txt', data, (err) => {
            if (err) {
                console.log('data append failed');
            } else {
                console.log('data append success');
            }
        })
    })
}

let readAndWriteFile = () => {
    fs.readFile('hello2.txt', {encoding: 'utf8'}, (err, data) => {

        fs.writeFile('hello.txt', data, (err) => {
            if (err) {
                console.log('copying data from hello2 to hello failed');
            } else {
                console.log('copying data from hello2 to hello successfully done');
            }
        })

    })
}

let deleteFiles = () => {

    fs.unlink('willdelete.txt', (error) => {
        if (error) throw error;
        console.log('file deleted');
    })

}

let renameFile = (oldFile, newFile) => {
    fs.rename(oldFile, newFile, (err) => {
        if (err) throw err;
        console.log('file renamed');
    })
}

renameFile('hello.txt', 'newHello.txt');
renameFile('hello2.txt', 'hello2renamed.txt');

