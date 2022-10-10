const nodemailer = require('nodemailer');
class MailService {
    async send(mail) {
        console.log('Creating mail transport...');
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
            console.log('Try to send message... ')
            let emailSend = await mailTransport.sendMail(mail);
            console.log(`Message sended - ${emailSend.messageId}`)
        } catch (e) {
            console.log(e.message)
        }
    }
}
module.exports = new MailService();
