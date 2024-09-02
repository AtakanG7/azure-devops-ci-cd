import 'dotenv/config'; // Load environment variables from .env file

const config = {
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  server: {
    port: process.env.PORT,
  },
  security: {
    secretKey: process.env.SECRET_KEY,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
  },
  brevo: {
    BREVO_SMTP_SERVER: process.env.BREVO_SMTP_SERVER,
    BREVO_SMTP_LOGIN: process.env.BREVO_SMTP_LOGIN,
    BREVO_SMTP_PASSWORD: process.env.BREVO_SMTP_PASSWORD,
    BREVO_SMTP_PORT: process.env.BREVO_SMTP_PORT,
    BREVO_SMTP_API_KEY: process.env.BREVO_SMTP_API_KEY,
  },
  telegram: {
    TELEGRAM_API_BASE_URL: process.env.TELEGRAM_API_BASE_URL,
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_BOT_CHAT_ID: process.env.TELEGRAM_BOT_CHAT_ID,
  },
  openApi: {
    OPEN_API_KEY: process.env.OPEN_API_KEY
  }
};

export default config;

