import nodemailer from 'nodemailer';

const sendVerificationEmail = async (email, code) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Verify connection
  try {
    await transporter.verify();
    console.log('SMTP connection verified');
  } catch (error) {
    console.error('SMTP verification failed:', error);
    throw error;
  }

  await transporter.sendMail({
    from: `"Discover Afrika" <${process.env.EMAIL_USER}>`,
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