import request from 'supertest';
import app from '../src/app';

describe('POST /openai/generateImage', () => {
  it('success render imagage', async () => {
    return request(app)
    .post('/openai/generateImage')
    .set('Accept', 'application/json')
    .send({
      prompt: 'horse playing golf',
      size: 'medium',
    })
    .expect(200)
  });
});
