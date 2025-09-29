import nodemailer from 'nodemailer';

const sendVerificationEmail = async (email, code) => {
  const transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",   // or "smtp.office365.com" for Outlook
  port: 587,                // use 465 for SSL or 587 for TLS
  secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
    rejectUnauthorized: false // Add this if you're having SSL issues
  },
  });

  await transporter.verify();
  await transporter.sendMail({
    from: '"Discover Afrika" <no-reply@richtech.com>',
    to: email,
    subject: 'Verify Your Email',
    html: `
      <h2>Your Discover Afrika verification code</h2>
      <p>Enter this code in the app to verify your email:</p>
      <h1 style="letter-spacing: 6px;">${code}</h1>
      <p>This code expires in 10 minutes.</p>
    `,
  });
};

export default sendVerificationEmail;