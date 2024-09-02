import { Router } from 'express';
import {
  getAllHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
} from '../controllers/hotelsController.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Hotels
 *   description: Hotel management API
 */

/**
 * @swagger
 * /hotels:
 *   get:
 *     summary: Get all hotels
 *     tags: [Hotels]
 *     responses:
 *       200:
 *         description: List of all hotels
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The hotel ID
 *                   name:
 *                     type: string
 *                     description: The hotel's name
 *                   address:
 *                     type: string
 *                     description: The hotel's address
 */
router.get('/', getAllHotels);

/**
 * @swagger
 * /hotels:
 *   post:
 *     summary: Create a new hotel
 *     tags: [Hotels]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The hotel's name
 *                 example: Hotel Doe
 *               address:
 *                 type: string
 *                 description: The hotel's address
 *                 example: 123 Main Street
 *               phone:
 *                 type: string
 *                 description: The hotel's phone number
 *                 example: 123456789
 *               rating:
 *                 type: number
 *                 description: The hotel's rating (1-5)
 *                 example: 4
 *               price:
 *                 type: number
 *                 description: The price per night
 *                 example: 150
 *               description:
 *                 type: string
 *                 description: The hotel's description
 *                 example: A luxurious hotel with all amenities.
 *               facilities:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of facilities available at the hotel
 *                 example: ["Free WiFi", "Swimming Pool", "Gym"]
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of image URLs for the hotel
 *                 example: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
 *               owner:
 *                   type: string
 *                   description: The ID of the owner of the hotel
 *     responses:
 *       201:
 *         description: Hotel created successfully
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
 *                 phone:
 *                   type: string
 *                   description: The hotel's phone number
 *                 rating:
 *                   type: number
 *                   description: The hotel's rating
 *                 price:
 *                   type: number
 *                   description: The price per night
 *                 description:
 *                   type: string
 *                   description: The hotel's description
 *                 facilities:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of facilities
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of image URLs
 */
router.post('/', createHotel);

/**
 * @swagger
 * /hotels/{id}:
 *   get:
 *     summary: Get a hotel by ID
 *     tags: [Hotels]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The hotel ID
 *     responses:
 *       200:
 *         description: The hotel information
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
 *       404:
 *         description: Hotel not found
 */
router.get('/:id', getHotelById);

/**
 * @swagger
 * /hotels/{id}:
 *   put:
 *     summary: Update a hotel by ID
 *     tags: [Hotels]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The hotel ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The hotel's name
 *                 example: Hotel Jane
 *               address:
 *                 type: string
 *                 description: The hotel's address
 *                 example: 456 Elm Street
 *     responses:
 *       200:
 *         description: Hotel updated successfully
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
 *                   description: The hotel's updated name
 *                 address:
 *                   type: string
 *                   description: The hotel's updated address
 *       404:
 *         description: Hotel not found
 */
router.put('/:id', updateHotel);

/**
 * @swagger
 * /hotels/{id}:
 *   delete:
 *     summary: Delete a hotel by ID
 *     tags: [Hotels]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The hotel ID
 *     responses:
 *       200:
 *         description: Hotel deleted successfully
 *       404:
 *         description: Hotel not found
 */
router.delete('/:id', deleteHotel);

export default router;

