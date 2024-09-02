import express from 'express';
import { getAllApps, getAppById, createApp, updateApp, deleteApp } from '../controllers/appController.js';

const router = express.Router();

/**
 * @swagger
 * /apps:
 *   get:
 *     summary: Retrieve a list of all apps
 *     tags: [Apps]
 *     responses:
 *       200:
 *         description: A list of apps
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The app ID
 *                   name:
 *                     type: string
 *                     description: The app name
 *                   description:
 *                     type: string
 *                     description: The app description
 */
router.get('/', getAllApps);

/**
 * @swagger
 * /apps:
 *   post:
 *     summary: Create a new app
 *     tags: [Apps]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The app name
 *                 example: MyApp
 *                 required: true
 *               category:
 *                 type: string
 *                 description: The app category
 *                 example: Productivity
 *                 required: true
 *               description:
 *                 type: string
 *                 description: The app description
 *                 example: A description of MyApp
 *                 required: true
 *               thumbnail:
 *                 type: string
 *                 description: The app thumbnail URL
 *                 example: https://example.com/thumbnail.jpg
 *                 required: true
 *               link:
 *                 type: string
 *                 description: The app link URL
 *                 example: https://defaultlink.com
 *                 required: true
 *               hotel:
 *                 type: string
 *                 format: objectId
 *                 description: The ID of the hotel associated with the app
 *                 example: 60d5f8d7f2a4b5d0e4f9d123
 *                 required: true
 *     responses:
 *       201:
 *         description: The app was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The app ID
 *                 name:
 *                   type: string
 *                   description: The app name
 *                 category:
 *                   type: string
 *                   description: The app category
 *                 description:
 *                   type: string
 *                   description: The app description
 *                 thumbnail:
 *                   type: string
 *                   description: The app thumbnail URL
 *                 link:
 *                   type: string
 *                   description: The app link URL
 *                 hotel:
 *                   type: string
 *                   format: objectId
 *                   description: The ID of the hotel associated with the app
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: The creation date of the app
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: The last updated date of the app
 *       400:
 *         description: Invalid input, object invalid
 *       500:
 *         description: Internal server error
 */
router.post('/', createApp);

/**
 * @swagger
 * /apps/{id}:
 *   get:
 *     summary: Get an app by ID
 *     tags: [Apps]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The app ID
 *     responses:
 *       200:
 *         description: The app information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The app ID
 *                 name:
 *                   type: string
 *                   description: The app name
 *                 description:
 *                   type: string
 *                   description: The app description
 *       404:
 *         description: App not found
 */
router.get('/:id', getAppById);

/**
 * @swagger
 * /apps/{id}:
 *   patch:
 *     summary: Update an app by ID
 *     tags: [Apps]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The app ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The new name of the app
 *                 example: MyApp Updated
 *               description:
 *                 type: string
 *                 description: The new description of the app
 *                 example: An updated description of MyApp
 *     responses:
 *       200:
 *         description: The app was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The app ID
 *                 name:
 *                   type: string
 *                   description: The updated app name
 *                 description:
 *                   type: string
 *                   description: The updated app description
 *       404:
 *         description: App not found
 */
router.patch('/:id', updateApp);

/**
 * @swagger
 * /apps/{id}:
 *   delete:
 *     summary: Delete an app by ID
 *     tags: [Apps]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The app ID
 *     responses:
 *       200:
 *         description: The app was successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                   example: App deleted successfully
 *       404:
 *         description: App not found
 */
router.delete('/:id', deleteApp);

export default router;
