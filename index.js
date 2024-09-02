import express from 'express';
// Import the routes
import userRouter from './routes/userRouter.js';
import chatbotRouter from './routes/chatbotRouter.js';
import contentRouter from './routes/contentRouter.js';
import hotelsRouter from './routes/hotelsRouter.js';
import foodsRouter from './routes/foodsRouter.js';
import roomRouter from './routes/roomRouter.js';
import appsRouter from './routes/appsRouter.js';

// Import the config file
import config from './config/config.js'
// Import the database connection
import db from './apis/db/cosmosDB.js'
import cache from './apis/cache/redisCache.js'
// Import services 
import { sendTelegramMessage } from './apis/services/telegram.js'
import { sendEmail } from './apis/services/mail.js'
import { swaggerUi, swaggerSpec } from './swagger.js';
import expressPartials from 'express-partials';
const app = express();

// Install body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use EJS template
app.set('view engine', 'ejs');
app.set('views', './views');

// Use expressPartials
app.use(expressPartials());

// Implemenet the swagger for API documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', contentRouter)
app.use('/users', userRouter)
app.use('/chatbot', chatbotRouter)
app.use('/hotels', hotelsRouter)
app.use('/foods', foodsRouter)
app.use('/rooms', roomRouter)
app.use('/apps', appsRouter)

app.listen(config.server.port, ()=>{
  console.log(`server runnig on port ${config.server.port}`)
})