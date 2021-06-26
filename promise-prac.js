function CustomPromise(executor) {

    this.resolveCallbacks = [];
    this.rejectedCallbacks = [];

    this.resolve = (result) => {
        this.resolveCallbacks.forEach(callback => callback(result));
    }
    this.reject = (reason) => {
        this.rejectedCallbacks.forEach(callback => callback(reason));
    }
    setTimeout(() => {
        executor(this.resolve, this.reject);
    })
}

CustomPromise.prototype.then = function (resolve) {
    if (typeof resolve !== 'function')
        throw 'resolve is not a function here';
    this.resolveCallbacks.push(resolve);
    return this;
}

CustomPromise.prototype.catch = function (reject) {
    if (typeof reject !== 'function')
        throw 'reject is not a function here';
    this.rejectedCallbacks.push(reject);
    return this;
}

new CustomPromise((resolve, reject) => {
    //reject('rejected reason is not inconclusive');
    resolve('hello resolved');
}).then((value) => {
    console.log(value);
}).catch((reason) => {
    console.log(reason)
}).then((value) => {
    console.log(value);
})


new Promise((resolve, reject) => {
    //resolve('good morning')
    reject('test');
}).then((value) => {
    console.log(value);
}).catch((reason) => {
    console.log(reason);
}).finally(() => {
    console.log('finally here');
})

