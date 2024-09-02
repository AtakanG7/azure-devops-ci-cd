import nodemailer from 'nodemailer';
import config from '../../config/config.js';
import { sendTelegramMessage } from '../services/telegram.js';

/**
 * Sends an email using the configured SMTP settings.
 * 
 * @param {string} to - The email address of the recipient.
 * @param {string} subject - The subject line of the email.
 * @param {string} text - The plain text body of the email.
 * @param {string} [html] - The HTML body of the email (optional).
 * @returns {Promise<Object>} - A Promise that resolves with the response from the SMTP server.
 */
export const sendEmail = async (to, subject, text, html = '') => {
  const transporter = nodemailer.createTransport({
    host: config.brevo.BREVO_SMTP_SERVER,
    port: config.brevo.BREVO_SMTP_PORT || 587,
    secure: false,
    auth: {
      user: config.brevo.BREVO_SMTP_LOGIN,
      pass: config.brevo.BREVO_SMTP_PASSWORD
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });

  const mailOptions = {
    from: "Atakan's Blog <no-reply@atakangul.com>",
    to,
    subject,
    text,
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    sendTelegramMessage(`Email sent: ${info.response}`);
    return info;
  } catch (error) {
    sendTelegramMessage(`Error sending email: ${error}`);
    console.error('Error sending email:', error);
    throw error;
  }
};
