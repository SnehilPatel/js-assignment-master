// news.test.js

const request = require('supertest');
const app = require('../../index');

describe('News API Tests', () => {
    it('should create match news', async () => {
        const response = await request(app)
            .post('/news/match')
            .send({
                matchId: 1,
                title: 'Match News',
                description: 'This is a match news.',
                sportId: 1
            });
        expect(response.status).toBe(201);
    });

    // Write other test cases for other endpoints
});
