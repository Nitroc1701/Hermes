const supertest = require('supertest')
const app = require('../../app')

describe('GET /', () => {
    it('should return 200 OK', () => {
        return supertest(app).get('/').expect(200)
    })
})
