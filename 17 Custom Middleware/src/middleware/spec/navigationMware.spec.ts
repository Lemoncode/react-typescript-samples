import { expect } from 'chai';
import configureStore = require('redux-mock-store');
import { hashHistory } from 'react-router';
import { navigationMiddleware } from '../navigationMware';
import { NavigationInfo } from '../navigationInfo';

describe('navigationMware', () => {
  it('when dispatch an action equals { type: "Test Action" } ' +
    'should not call to hashHistory.push method', sinon.test(() => {
    //Arrange
    let sinon: Sinon.SinonStatic = this;

    let hashHistoryPushMethodMock = sinon.stub(hashHistory, 'push');
    let middleWares = [navigationMiddleware];
    let createStore = configureStore(middleWares);
    let mockStore = createStore({});

    let action = {
      type: "Test Action"
    };

    //Act
    mockStore.dispatch(action);

    //Assert
    expect(hashHistoryPushMethodMock.called).to.be.false;
  }).bind(this));
});
