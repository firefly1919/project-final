const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, text) => {
    try {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'jackblack003a@gmail.com', // Enter your Gmail address here
                pass: 'fsommmxzhjpnbrwt' // Enter your Gmail password here
            }
        });

        let info = await transporter.sendMail({
            from: 'jackblack003a@gmail.com',
            to: email , // replace with recipient email addresses
            subject: subject,
            text: text
        });

        console.log(`Message sent: ${info.messageId}`);
    } catch (error) {
        console.log(`Error sending email: ${error}`);
    }
};

module.exports = sendEmail;

