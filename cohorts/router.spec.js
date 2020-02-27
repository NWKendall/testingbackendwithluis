const request = require('supertest');
const server = require('../api/server.js')

describe('cohorts router', function() {
 
 it('should run tests', function() {
   expect(true).toBe(true)
 })
 
  describe('GET /', function () {
    it('should return 200 OK', function() {
      return request(server).get('/api/cohorts')
        .then(res => {
          expect(res.status).toBe(200);
        })
    })

    // return version
    it('should return cohorts as the router value', function() {
      return request(server).get('/api/cohorts')
        .then(res => {
          expect(res.body.router).toBe('cohorts');
        })
    })

    // async await version - never on describe, only on it
    it('should return cohorts as the router value', async function() { 

      const res = await request(server).get('/api/cohorts');      
      expect(res.body.router).toBe('cohorts'); 
      

    })
  })
})

// returning a promise forces api to await, can use [ async/await, return, done]