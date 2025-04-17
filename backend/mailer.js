const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendVerificationEmail(to, token, customLink = null) {
  const baseUrl = process.env.CLIENT_URL || 'http://localhost:5173';
  const url = customLink || `${baseUrl}/verify-email?token=${token}`;

  console.log(`📧 Sending verification email to: ${to}`);
  console.log(`🔗 Verification link: ${url}`);

  await resend.emails.send({
    from: `Windows Defender <${process.env.EMAIL_FROM}>`,
    to,
    subject: '🔐 Verify your Email',
    html: `
      <h2>Welcome to Windows Defender</h2>
      <p>Click the link below to verify your email:</p>
      <a href="${url}">${url}</a>
    `,
  });
}

module.exports = { sendVerificationEmail };
