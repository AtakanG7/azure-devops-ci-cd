import request from 'supertest';
import express from 'express';

const app = express();

// Define the root route to render a welcome page
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome to My Web App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
          }
          h1 {
            color: #333;
          }
          p {
            color: #666;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to My Simple Web App</h1>
        <p>A Simple Web App built with Express.js</p>
      </body>
    </html>
  `);
});

// Tests
describe('GET /', () => {
  it('should return a welcome page with correct content', async () => {
    const response = await request(app).get('/');

    // Check status code
    expect(response.status).toBe(200);

    // Check response content type
    expect(response.headers['content-type']).toMatch(/html/);

    // Check if the response body contains expected content
    expect(response.text).toContain('<h1>Welcome to My Simple Web App</h1>');
    expect(response.text).toContain('<p>A Simple Web App built with Express.js</p>');
  });
});
