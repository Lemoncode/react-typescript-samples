import { expect } from 'chai';
import { navigationMiddleware } from '../navigationMware';
import configureStore = require('redux-mock-store');

describe('navigationMware', () => {
  it('should return true if karma env is working', () => {
    //Arrange
    const createStore = configureStore(navigationMiddleware);
    const action = {
      type: "Test Action"
    };

    //Act

    //Assert
    expect(true).to.be.true;
  })
});
