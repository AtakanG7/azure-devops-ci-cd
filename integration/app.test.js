import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express, { json } from 'express';
import userRouter from '../routes/user.js';

const app = express();
app.use(json());
app.use('/users', userRouter);

describe('Users API Integration Tests', () => {
  let createdUserId;

  it('GET /users should return an empty object initially', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({});
  });

  it('POST /users should create a new user', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' };
    const response = await request(app)
      .post('/users')
      .send(newUser);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(newUser.name);
    expect(response.body.email).toBe(newUser.email);
    createdUserId = response.body.id;
  });

  it('GET /users/:id should return the created user', async () => {
    const response = await request(app).get(`/users/${createdUserId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(createdUserId);
    expect(response.body.name).toBe('John Doe');
    expect(response.body.email).toBe('john@example.com');
  });

  it('PUT /users/:id should update the user', async () => {
    const updatedUser = { name: 'Jane Doe', email: 'jane@example.com' };
    const response = await request(app)
      .put(`/users/${createdUserId}`)
      .send(updatedUser);
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(createdUserId);
    expect(response.body.name).toBe(updatedUser.name);
    expect(response.body.email).toBe(updatedUser.email);
  });

  it('DELETE /users/:id should delete the user', async () => {
    const response = await request(app).delete(`/users/${createdUserId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('User deleted');
  });

  it('GET /users/:id should return 404 for deleted user', async () => {
    const response = await request(app).get(`/users/${createdUserId}`);
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('User not found');
  });

  it('PUT /users/:id should return 404 for non-existent user', async () => {
    const updatedUser = { name: 'John Smith', email: 'john.smith@example.com' };
    const response = await request(app)
      .put('/users/nonexistentid')
      .send(updatedUser);
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('User not found');
  });

  it('DELETE /users/:id should return 404 for non-existent user', async () => {
    const response = await request(app).delete('/users/nonexistentid');
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('User not found');
  });
});
