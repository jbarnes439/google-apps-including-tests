const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');


describe('Test App', () => {
  it('should get a response with apps', () => {
    return supertest(app)
      .get('/apps')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body).to.be.an('array');
        expect(res.body[0]).to.be.an('object');
        expect(res.body[0]).to.include.all.keys(
          'App', 'Rating', 'Genres'
        );
      });
  });
  const validSorts = ['App', 'Rating'];
  validSorts.forEach(sort => {
    it(`should return array of apps sorted by ${sort}`, () => {
      return supertest(app)
        .get('/apps')
        .query({ sort })
        .expect(200)
        .expect(res => {
          expect(res.body).to.be.an('array');
          let i = 0, sorted = true;
          while (sorted && i < res.body.length - 1) {
            sorted = res.body[i][sort] <= res.body[i + 1][sort];
            i++;
          }
          expect(sorted).to.be.true;
        });
    });
  }
  );
  it('should return 400 is sort by wrong key', () => {
    return supertest(app)
      .get('/apps')
      .query({ sort: 'MISTAKE' })
      .expect(400, 'Sort must be by app or rating');
  });
  const validGenres = ['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'];
  validGenres.forEach(genre => {
    it(`should return array of apps by ${genre}`, () => {
      return supertest(app)
        .get('/apps')
        .query({ genre })
        .expect(200)
        .expect(res => {
          expect(res.body).to.be.an('array');
          for( let i =0; i< res.body.length; i++){
            //expect is for array to include genres
            expect(res.body[i].Genres).to.include(genre);
          }  
        });
    });
  });
});