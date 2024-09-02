import { createClient } from 'redis';
import config from '../../config/config.js';

// Creating a new Redis client
const client = createClient({
  // Authentication options
  password: config.redis.password, // Redis password from config file
  socket: {
    host: config.redis.host, // Redis host from config file
    port: config.redis.port, // Redis port from config file
  },
});

// Connecting to the Redis server
client.connect()
  .then(() => {
    // If the connection is successful, log the event to the console
    console.log('Redis connected');
  })
  .catch((error) => {
    // If the connection fails, log the error to the console
    console.log('Redis connection error:', error);
  });

// Graceful shutdown event listeners
// Close Redis connection on SIGINT (Ctrl+C) or SIGTERM (kill command)
process.on('SIGINT', () => {
    console.log('Received SIGINT signal. Closing Redis connection...');
    client.quit();
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('Received SIGTERM signal. Closing Redis connection...');
    client.quit();
    process.exit(0);
});

// Exporting the client so that it can be used in other files
export default client;