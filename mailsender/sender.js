const nodemailer = require('nodemailer');
const config = require('./config');

class MailSender {

    getTransporter() {
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.SENDER_MAIL,
                pass: config.PASSWORD
            }
        })
    }

    getMailOptions(subject, body, to) {
        return {
            from: config.SENDER_MAIL,
            to: to,
            subject: subject,
            text: body
        };
    }

    send(mailDetails) {

        let transporter = this.getTransporter();
        let mailOptions = this.getMailOptions(mailDetails.subject, mailDetails.body, mailDetails.to);
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('mail sending failed')
            } else {
                console.log('mail sending success');
                console.log(info);
            }
        })

    }

}

module.exports = MailSender;
