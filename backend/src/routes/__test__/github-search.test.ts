import request from 'supertest';
import { app } from '../../app';

it('returns a 400 on not found repo Name', async () => {
    return request(app)
        .get('/backend/repository')
        .expect(400);
});

it('returns a 200 on successfule request with repo name', async () => {
    return request(app)
        .get('/backend/repository?q=laravel')
        .expect(200);
});