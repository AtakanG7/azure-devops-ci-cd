import axios from 'axios';
import config from '../../config/config.js';

/**
 * This module provides functions to interact with the Telegram Bot API.
 * It allows you to send messages to a specific chat or group.
 */

/**
 * Sends a message to a specific Telegram chat or group.
 * @param {string} chatId - The ID of the chat or group to send the message to. 
 * @param {string} message - The message to send.
 * @returns {Promise<void>} - A Promise that resolves when the message is sent successfully.
 */
export const sendTelegramMessage = async (message) => {
  try {
    const url = `${config.telegram.TELEGRAM_API_BASE_URL}${config.telegram.TELEGRAM_BOT_TOKEN}/sendMessage`;
    const data = {
      chat_id: config.telegram.TELEGRAM_BOT_CHAT_ID,
      text: message,
    };

    await axios.post(url, data);
  } catch (error) {
    console.error('Error sending message to Telegram:', error.message);
  }
};

sendTelegramMessage('Nevotek Server started! 🚀. Visit the website : ' + `${config.telegram.DOMAIN}`);