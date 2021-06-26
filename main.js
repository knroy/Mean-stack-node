new Promise((resolve, reject) => {
    resolve('testing');
}).then((value) => {
    console.log(value);
}).then(reason => {
    console.log(reason);
})
