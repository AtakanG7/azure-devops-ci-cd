import { Router } from 'express';
import { loginUser, getDashboardDetails, logClientVisit, homePage } from '../controllers/contentController.js';

const router = Router();

router.get('/', homePage);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in a user
 *     tags: [Content]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username
 *               password:
 *                 type: string
 *                 description: The user's password
 *             example:
 *               username: "john_doe"
 *               password: "password123"
 *     responses:
 *       '200':
 *         description: Login successful, returns JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for authentication
 *       '401':
 *         description: Unauthorized, invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The error message
 */
router.post('/login', loginUser);

/**
 * @swagger
 * /hotel/{id}/visit:
 *   post:
 *     summary: Log a client visit to a hotel
 *     tags: [Content]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The hotel ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientId:
 *                 type: string
 *                 description: The ID of the client visiting the hotel
 *               visitTime:
 *                 type: string
 *                 format: date-time
 *                 description: The time of the visit
 *             example:
 *               clientId: "client123"
 *               visitTime: "2024-08-18T15:30:00Z"
 *     responses:
 *       '200':
 *         description: Visit logged successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *       '400':
 *         description: Bad request, invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The error message
 */
router.post('/:id/visit', logClientVisit);

/**
 * @swagger
 * /hotel/{id}:
 *   get:
 *     summary: View hotel details
 *     tags: [Content]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The hotel ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Hotel details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The hotel ID
 *                 name:
 *                   type: string
 *                   description: The hotel's name
 *                 address:
 *                   type: string
 *                   description: The hotel's address
 *                 description:
 *                   type: string
 *                   description: The hotel's description
 *       '404':
 *         description: Hotel not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The error message
 */
router.get('/dashboard/:id', getDashboardDetails);

export default router;

