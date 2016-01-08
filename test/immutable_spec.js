import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {

  describe("A List", () => {

    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'The Big Lebowski');

      expect(nextState).to.equal(Map({
        Movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'The Big Lebowski'
        )
      }));

      expect(state).to.equal(Map({
        Movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));

    });

  });


  /*
   describe('a number', () => {
   function increment(currentState){
   return currentState + 1;
   }
   it('is immutable', () => {
   let state = 42;
   let nextState = increment(state);

   expect(nextState).to.equal(43);
   expect(state).to.equal(42);
   });
   });
   */
});
