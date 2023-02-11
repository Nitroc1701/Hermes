const supertest = require('supertest')
const app = require('../../app')

describe('GET /', () => {
    it('should return 200 OK', () => {
        return supertest(app).get('/').expect(200)
    })
})

describe('POST /', () => {
    it('should return 200 OK', () => {
        return supertest(app).post('/').expect(200)
    })
})
