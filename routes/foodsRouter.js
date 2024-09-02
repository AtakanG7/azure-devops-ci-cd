import { Router } from 'express';
import {
  getAllFoods,
  getFoodById,
  createFood,
  updateFood,
  deleteFood,
} from '../controllers/foodsController.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Foods
 *   description: Food management API
 */

/**
 * @swagger
 * /foods:
 *   get:
 *     summary: Get all foods
 *     tags: [Foods]
 *     responses:
 *       200:
 *         description: List of all foods
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The food ID
 *                   name:
 *                     type: string
 *                     description: The food's name
 *                   price:
 *                     type: number
 *                     description: The food's price
 *                   description:
 *                     type: string
 *                     description: The food's description
 *                   image:
 *                     type: string
 *                     description: The food's image
 *                   category:
 *                     type: string
 *                     description: The food's category
 */
router.get('/', getAllFoods);

/**
 * @swagger
 * /foods:
 *   post:
 *     summary: Create a new food
 *     tags: [Foods]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The food's name
 *                 required: true
 *                 example: Burger
 *               price:
 *                 type: number
 *                 description: The food's price
 *                 required: true
 *                 example: 10.99
 *               description:
 *                 type: string
 *                 description: The food's description
 *                 required: true
 *                 example: Tasty burger
 *               image:
 *                 type: string
 *                 description: The food's image URL
 *                 required: true
 *                 example: https://example.com/burger.jpg
 *               category:
 *                 type: string
 *                 description: The food's category
 *                 required: true
 *                 example: Burgers
 *               Hotel:
 *                 type: String
 *                 description: The Id of the Hotel
 *                 required: true
 *                 example: 66c227249ecf2446dae3162b
 *     responses:
 *       201:
 *         description: Food created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The food ID
 *                 name:
 *                   type: string
 *                   description: The food's name
 *                 price:
 *                   type: number
 *                   description: The food's price
 *                 description:
 *                   type: string
 *                   description: The food's description
 *                 image:
 *                   type: string
 *                   description: The food's image URL
 *                 category:
 *                   type: string
 *                   description: The food's category
 */
router.post('/', createFood);

/**
 * @swagger
 * /foods/{id}:
 *   get:
 *     summary: Get a food by ID
 *     tags: [Foods]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The food ID
 *     responses:
 *       200:
 *         description: The food information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The food ID
 *                 name:
 *                   type: string
 *                   description: The food's name
 *                 price:
 *                   type: number
 *                   description: The food's price
 *                 description:
 *                   type: string
 *                   description: The food's description
 *                 image:
 *                   type: string
 *                   description: The food's image URL
 *                 category:
 *                   type: string
 *                   description: The food's category
 *       404:
 *         description: Food not found
 */
router.get('/:id', getFoodById);

/**
 * @swagger
 * /foods/{id}:
 *   put:
 *     summary: Update a food by ID
 *     tags: [Foods]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The food ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The food's name
 *                 example: Sandwich
 *               price:
 *                 type: number
 *                 description: The food's price
 *                 example: 5.99
 *               description:
 *                 type: string
 *                 description: The food's description
 *                 example: Tasty sandwich
 *               image:
 *                 type: string
 *                 description: The food's image URL
 *                 example: https://example.com/sandwich.jpg
 *               category:
 *                 type: string
 *                 description: The food's category
 *                 example: Sandwiches
 *     responses:
 *       200:
 *         description: Food updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The food ID
 *                 name:
 *                   type: string
 *                   description: The food's updated name
 *                 price:
 *                   type: number
 *                   description: The food's updated price
 *                 description:
 *                   type: string
 *                   description: The food's updated description
 *                 image:
 *                   type: string
 *                   description: The food's updated image URL
 *                 category:
 *                   type: string
 *                   description: The food's updated category
 *       404:
 *         description: Food not found
 */
router.put('/:id', updateFood);

/**
 * @swagger
 * /foods/{id}:
 *   delete:
 *     summary: Delete a food by ID
 *     tags: [Foods]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The food ID
 *     responses:
 *       200:
 *         description: Food deleted successfully
 *       404:
 *         description: Food not found
 */
router.delete('/:id', deleteFood);

export default router;

