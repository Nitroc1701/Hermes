const supertest = require('supertest')
const app = require('../../app')

/*
* GET /projects test suite
*/
describe('GET /projects', () => {
    it('should return 200 OK', () => {
        return supertest(app).get('/projects').expect(200)
    })
})

/*
* POST /projects test suite
*/
describe('POST /projects', () => {
    it('should return 404 NOT FOUND', () => {
        return supertest(app).post('/projects').expect(404)
    })

    it('should return 201 CREATED with parameters', () => {
        return supertest(app)
            .post('/projects')
            .send({
                name: 'Test 1',
                description: 'Test 1',
                version: '1.0.0',
                author: 'Test',
                license: 'MIT',
                repository: 'https://github.com/Nitroc1701',
            })
            .expect(200)
    })

    it('should return 201 CREATED with parameters to have one to delete', () => {
        return supertest(app)
            .post('/projects')
            .send({
                name: 'Test 2',
                description: 'Test 2',
                version: '1.0.0',
                author: 'Test',
                license: 'MIT',
                repository: 'https://github.com/Nitroc1701',
            })
            .expect(200)
    })

    it('should return 404 NOT FOUND with missing repository', () => {
        return supertest(app)
            .post('/projects')
            .send({
                name: 'Test',
                description: 'Test',
                version: '1.0.0',
                author: 'Test',
                license: 'MIT',
            })
            .expect(404)
    })

    it('should return 404 NOT FOUND with missing license', () => {
        return supertest(app)
            .post('/projects')
            .send({
                name: 'Test',
                description: 'Test',
                version: '1.0.0',
                author: 'Test',
                repository: 'https://github.com/Nitroc1701',
            })
            .expect(404)
    })

    it('should return 404 NOT FOUND with missing author', () => {
        return supertest(app)
            .post('/projects')
            .send({
                name: 'Test',
                description: 'Test',
                version: '1.0.0',
                license: 'MIT',
                repository: 'https://github.com/Nitroc1701',
            })
            .expect(404)
    })

    it('should return 404 NOT FOUND with missing version', () => {
        return supertest(app)
            .post('/projects')
            .send({
                name: 'Test',
                description: 'Test',
                author: 'Test',
                license: 'MIT',
                repository: 'https://github.com/Nitroc1701',
            })
            .expect(404)
    })

    it('should return 404 NOT FOUND with missing description', () => {
        return supertest(app)
            .post('/projects')
            .send({
                name: 'Test',
                version: '1.0.0',
                author: 'Test',
                license: 'MIT',
                repository: 'https://github.com/Nitroc1701',
            })
            .expect(404)
    })

    it('should return 404 NOT FOUND with missing name', () => {
        return supertest(app)
            .post('/projects')
            .send({
                description: 'Test',
                version: '1.0.0',
                author: 'Test',
                license: 'MIT',
                repository: 'https://github.com/Nitroc1701',
            })
            .expect(404)
    })
})

/*
* GET /projects/:id test suite
*/
describe('GET /projects/:id', () => {
    it('should return 200 OK', () => {
        return supertest(app).get('/projects/1').expect(200)
    })

    it('should return 404 NOT FOUND', () => {
        return supertest(app).get('/projects/100').expect(404)
    })
})

/*
* DELETE /projects/:id test suite
*/
describe('DELETE /projects/:id', () => {
    it('should return 200 OK', () => {
        return supertest(app).delete('/projects/2').expect(200)
    })

    it('should return 404 NOT FOUND', () => {
        return supertest(app).delete('/projects/100').expect(404)
    })
})

/*
* PATCH /projects/:id test suite
*/
describe('PATCH /projects/:id', () => {
    it('should return 200 OK', () => {
        return supertest(app)
            .patch('/projects/1')
            .send({
                name: 'Test',
                description: 'Test',
                version: '2.0.0',
                author: 'Test',
                license: 'MIT',
                repository: 'https://github.com/Nitroc1701',
            })
            .expect(200)
    })

    it('should return 404 NOT FOUND', () => {
        return supertest(app).patch('/projects/100').expect(404)
    })
})
