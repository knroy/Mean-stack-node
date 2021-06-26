const PROMISE_STATES = {
    REJECTED: 'REJECTED',
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED'
}

const IsAPromise = (_) => {

}

class MyPromise {

    handlers = [];
    value = undefined;

    constructor(executor) {
        this.state = PROMISE_STATES.PENDING;
        setTimeout(() => {
            executor(this.resolve, this.reject);
        })
    }

    resolve = (value) => {
        setTimeout(() => {

            if (this.state !== PROMISE_STATES.PENDING) {
                return;
            }

            this.value = value;
            this.state = PROMISE_STATES.FULFILLED;
        })
    }

    reject = (reason) => {
        this.value = reason;
        this.state = PROMISE_STATES.REJECTED;
    }

}

MyPromise.prototype.then = function (onFulFilled, onRejected) {
    if (typeof resolve !== 'function')
        throw 'resolve is not a function here';
    this.resolveCallbacks.push(resolve);
    return this;
}

MyPromise.prototype.catch = function (reject) {
    if (typeof reject !== 'function')
        throw 'reject is not a function here';
    this.rejectedCallbacks.push(reject);
    return this;
}

