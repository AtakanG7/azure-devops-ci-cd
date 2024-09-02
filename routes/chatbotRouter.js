import { Router } from 'express';
import {
  getChatbotResponse,
} from '../controllers/chatBotController.js';
import config from '../config/config.js';
import { fileURLToPath } from 'url';
import multer from 'multer';
import fs from 'fs';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!fs.existsSync(path.join(__dirname, 'uploads'))) {
  fs.mkdirSync(path.join(__dirname, 'uploads'));
}

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

/**
 * @swagger
 * tags:
 *   name: Chatbot
 *   description: Chatbot API
 */
const router = Router();

/**
 * @swagger
 * /get-chatbot-response:
 *   post:
 *     summary: Get the chatbot response
 *     tags: [Chatbot]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               audio:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Chatbot response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 answer:
 *                   type: string
 *                   description: The chatbot response
 *       '500':
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The error message
 */
router.post('/get-chatbot-response', upload.single('audio'), getChatbotResponse);

export default router;

