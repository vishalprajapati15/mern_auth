import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 20000,
});

transporter.verify((err)=>{
    if(err){
        console.log('SMTP Verify Error: ', err.message);
    }
    else{
        console.log('SMTP READY');
    }
});

export default transporter;