const nodemailer = require('nodemailer');

module.exports = async function (mail) {
    const mailTransport = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
            user: 'mailtransport@vitaforest.kz',
            pass: 'Waxtinoff1224!',
        },
    });
    try {
        let emailSend = await mailTransport.sendMail(mail);
        console.log(`Message sended - ${emailSend.messageId}`)
    } catch (e) {
        console.log(e.message)
    }
}

