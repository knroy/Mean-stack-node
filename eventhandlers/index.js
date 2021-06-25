const mailEventHandler = require('./mail-event-handler');

let initAllHandlers = (eventEmitter) => {
    mailEventHandler(eventEmitter);
}

module.exports = initAllHandlers;
