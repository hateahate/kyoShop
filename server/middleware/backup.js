const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
        user: 'mailtransport@vitaforest.kz',
        pass: 'Waxtinoff1224!',
    },
});

const mailSender = async (mail) => {
    try {
        let emailSend = await mailTransport.sendMail(mail);
        console.log(`Message sended - ${emailSend.messageId}`)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = mailSender()

