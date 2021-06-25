const MailSender = require('./../mailsender');

let MailEventHandler = (eventEmitter) => {
    eventEmitter.on('sendmail', (mailDetails) => {
        let sender = new MailSender();
        sender.send(mailDetails);
    });
}

module.exports = MailEventHandler;
