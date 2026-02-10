import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to send email using Resend
const sendEmail = async ({ to, subject, text, html }) => {
    try {
        const { data, error } = await resend.emails.send({
            from: `MERN Auth <onboarding@resend.dev>`, // Use Resend's test domain or your verified domain
            to: [to],
            subject,
            text: text || '',
            html: html || text,
        });

        if (error) {
            console.error('Resend Error:', error);
            throw error;
        }

        console.log('✓ Email sent successfully to:', to);
        return { success: true, data };
    } catch (error) {
        console.error('Email Send Error:', error.message);
        throw error;
    }
};

// Verify API key is set
if (!process.env.RESEND_API_KEY) {
    console.error('⚠ RESEND_API_KEY not set - emails will fail');
} else {
    console.log('✓ Resend email service ready');
}

export default sendEmail;