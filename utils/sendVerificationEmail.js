import nodemailer from 'nodemailer';

const sendVerificationEmail = async (email, code) => {
  const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
  connectionTimeout: 10000, // 10 seconds
});


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