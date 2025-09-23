import nodemailer from 'nodemailer';

const sendCongratulationEmail = async (email, name) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Discover Afrika" <no-reply@richtech.com>',
    to: email,
    subject: `🎉 Congratulations ${name}! Your Email Has Been Verified`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #1A2B4C;">Welcome to Discover Afrika!</h2>
        <p>We’re excited to let you know that your email <strong>${email}</strong> has been successfully verified. 🎉</p>
        <p>You can now enjoy full access to Discover Afrika’s features and start your journey with us.</p>
        <p style="margin-top: 20px;">Thank you for joining us!</p>
        <p style="font-weight: bold;">– The Discover Afrika Team</p>
      </div>
    `,
  });
};

export default sendCongratulationEmail;
