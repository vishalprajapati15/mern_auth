import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.APP_PASS,
    },
    // Add pool and rate limiting for production
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
    rateDelta: 1000,
    rateLimit: 5,
});

// Verify connection on startup
transporter.verify((err) => {
    if (err) {
        console.error('SMTP Connection Error:', err.message);
    } else {
        console.log('✓ Gmail SMTP ready to send emails');
    }
});

export default transporter;