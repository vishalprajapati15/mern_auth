import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false, // use TLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls:{
        rejectUnauthorized:false,
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000,
});

transporter.verify((err, success)=>{
    if(err){
        console.log('SMTP Error: ', err.message);
    }
    else{
        console.log('SMTP READY');
    }
});

export default transporter;