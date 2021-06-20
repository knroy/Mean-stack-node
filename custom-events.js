let events = {};

function test() {
    console.log('Hello');
}

let key = 'testFunction';
events[key] = [1, 2, 3, 4];

console.log(events.testFunction);

// customer event emitter implementation in nodejs

let EventManager = function () {

    this.events = {}

    this.addEventListener = (key, callback) => {
        if (typeof callback !== "function") {
            throw 'callback needs to be a function';
        }
        if (this.events[key]) {
            this.events[key].push(callback);
        } else {
            this.events[key] = [callback];
        }
    }

    this.eventEmit = (key) => {
        if (this.events[key]) {
            let callbacks = this.events[key];
            callbacks.forEach(callabck => callabck());
        } else {
            console.log(`no event listener registered for event named ${key}`)
        }
    }

}


let eventManager = new EventManager();

eventManager.addEventListener('click', () => {
    console.log('click event generated');
})

eventManager.addEventListener('click', () => {
    console.log('click event generated here 2');
})

eventManager.eventEmit('click');
eventManager.eventEmit('welcome');

// default event emitter in nodejs

const events = require('events');
const eventEmiitter = new events.EventEmitter();


eventEmiitter.on('click', () => {
    console.log('click event');
})

eventEmiitter.emit('click');
eventEmiitter.emit('welcome');


