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
    registrationNotify(email, first_name, last_name) {
        return {
            from: '"Vitaforest" <mailtransport@vitaforest.kz>', // sender address
            to: email, // list of receivers
            subject: "New account registration", // Subject line
            html: `<b>Hello, ${first_name} ${last_name}</b></br>
            <p>Your account ${email} succesfully created and waiting approval</p>
            <p>You get a notify when your account will be approved</p>
            <p>Have a nice day!</p>
            `, // html body
        }
    }
}
module.exports = new MailService();
