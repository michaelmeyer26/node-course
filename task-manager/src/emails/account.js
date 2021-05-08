const sgMail = require('@sendgrid/mail')
const { getMaxListeners } = require('../models/task')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'michael.c.meyer26@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app!`    
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'michael.c.meyer26@gmail.com',
        subject: 'Account Cancellation',
        text: `Goodbye, ${name}, is there anything we could have done to kept you on board?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}