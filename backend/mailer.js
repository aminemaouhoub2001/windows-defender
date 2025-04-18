const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendVerificationEmail(to, token, customLink = null) {
  const baseUrl = process.env.CLIENT_URL || 'http://localhost:5173';

  // 👉 Si customLink est défini (cas reset), on l’utilise
  const url = customLink || `${baseUrl}/verify-email?token=${token}`;

  // 👉 Détecter si c’est pour "verify email" ou "reset password"
  const isReset = customLink !== null;

  const subject = isReset
    ? '🔑 Reset Your Password'
    : '🔐 Verify your Email';

  const actionText = isReset
    ? 'Click the link below to reset your password:'
    : 'Click the link below to verify your email:';

  const title = isReset
    ? 'Reset your password'
    : 'Welcome to Windows Defender';

  console.log(`📧 Sending ${isReset ? 'reset password' : 'verification'} email to: ${to}`);
  console.log(`🔗 Link: ${url}`);

  await resend.emails.send({
    from: `Windows Defender <${process.env.EMAIL_FROM}>`,
    to,
    subject,
    html: `
      <h2>${title}</h2>
      <p>${actionText}</p>
      <a href="${url}">${url}</a>
      <p style="font-size:12px;color:gray;">This link will expire in 15 minutes.</p>
    `,
  });
}

module.exports = { sendVerificationEmail };
