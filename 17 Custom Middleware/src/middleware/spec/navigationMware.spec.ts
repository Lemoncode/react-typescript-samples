import { expect } from 'chai';
import configureStore = require('redux-mock-store');
import { hashHistory } from 'react-router';
import { navigationMiddleware } from '../navigationMware';
import { NavigationInfo } from '../navigationInfo';

describe('navigationMware', () => {
  it('when dispatch an action equals { type: "Test Action" } ' +
    'should does not call to hashHistory.push method', sinon.test(() => {
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

  it('when dispatch an action equals { type: "Test Action", navigationInfo: null } ' +
    'should does not call to hashHistory.push method', sinon.test(() => {
    //Arrange
    let sinon: Sinon.SinonStatic = this;

    let hashHistoryPushMethodMock = sinon.stub(hashHistory, 'push');
    let middleWares = [navigationMiddleware];
    let createStore = configureStore(middleWares);
    let mockStore = createStore({});

    let action = {
      type: "Test Action",
      navigationInfo: null
    };

    //Act
    mockStore.dispatch(action);

    //Assert
    expect(hashHistoryPushMethodMock.called).to.be.false;
  }).bind(this));

  it('when dispatch an action equals { type: "Test Action", navigationInfo: undefined } ' +
    'should does not call to hashHistory.push method', sinon.test(() => {
    //Arrange
    let sinon: Sinon.SinonStatic = this;

    let hashHistoryPushMethodMock = sinon.stub(hashHistory, 'push');
    let middleWares = [navigationMiddleware];
    let createStore = configureStore(middleWares);
    let mockStore = createStore({});

    let action = {
      type: "Test Action",
      navigationInfo: undefined
    };

    //Act
    mockStore.dispatch(action);

    //Assert
    expect(hashHistoryPushMethodMock.called).to.be.false;
  }).bind(this));

  it('when dispatch an action equals { type: "Test Action", ' +
      'navigationInfo: { succeeded: false, errorNavigationRoute: null} } ' +
    'should does not call to hashHistory.push method', sinon.test(() => {
    //Arrange
    let sinon: Sinon.SinonStatic = this;

    let hashHistoryPushMethodMock = sinon.stub(hashHistory, 'push');
    let middleWares = [navigationMiddleware];
    let createStore = configureStore(middleWares);
    let mockStore = createStore({});

    let navigationInfo = new NavigationInfo();
    navigationInfo.succeeded = false;
    navigationInfo.errorNavigationRoute = null;

    let action = {
      type: "Test Action",
      navigationInfo: navigationInfo
    };

    //Act
    mockStore.dispatch(action);

    //Assert
    expect(hashHistoryPushMethodMock.called).to.be.false;
  }).bind(this));

  it('when dispatch an action equals { type: "Test Action", ' +
      'navigationInfo: { succeeded: false, errorNavigationRoute: undefined} } ' +
    'should does not call to hashHistory.push method', sinon.test(() => {
    //Arrange
    let sinon: Sinon.SinonStatic = this;

    let hashHistoryPushMethodMock = sinon.stub(hashHistory, 'push');
    let middleWares = [navigationMiddleware];
    let createStore = configureStore(middleWares);
    let mockStore = createStore({});

    let navigationInfo = new NavigationInfo();
    navigationInfo.succeeded = false;
    navigationInfo.errorNavigationRoute = undefined;

    let action = {
      type: "Test Action",
      navigationInfo: navigationInfo
    };

    //Act
    mockStore.dispatch(action);

    //Assert
    expect(hashHistoryPushMethodMock.called).to.be.false;
  }).bind(this));

  it('when dispatch an action equals { type: "Test Action", ' +
      'navigationInfo: { succeeded: false, errorNavigationRoute: "Test error Route"} } ' +
    'should calls to hashHistory.push method with parameter equals "Test error Route"', sinon.test(() => {
    //Arrange
    let sinon: Sinon.SinonStatic = this;

    let hashHistoryPushMethodMock = sinon.stub(hashHistory, 'push');
    let middleWares = [navigationMiddleware];
    let createStore = configureStore(middleWares);
    let mockStore = createStore({});

    let navigationInfo = new NavigationInfo();
    navigationInfo.succeeded = false;
    navigationInfo.errorNavigationRoute = "Test error Route";

    let action = {
      type: "Test Action",
      navigationInfo: navigationInfo
    };

    //Act
    mockStore.dispatch(action);

    //Assert
    expect(hashHistoryPushMethodMock.called).to.be.true;
    expect(hashHistoryPushMethodMock.calledWith("Test error Route")).to.be.true;
  }).bind(this));

  it('when dispatch an action equals { type: "Test Action", ' +
      'navigationInfo: { succeeded: true, successNavigationRoute: null} } ' +
    'should does not call to hashHistory.push method', sinon.test(() => {
    //Arrange
    let sinon: Sinon.SinonStatic = this;

    let hashHistoryPushMethodMock = sinon.stub(hashHistory, 'push');
    let middleWares = [navigationMiddleware];
    let createStore = configureStore(middleWares);
    let mockStore = createStore({});

    let navigationInfo = new NavigationInfo();
    navigationInfo.succeeded = true;
    navigationInfo.successNavigationRoute = null;

    let action = {
      type: "Test Action",
      navigationInfo: navigationInfo
    };

    //Act
    mockStore.dispatch(action);

    //Assert
    expect(hashHistoryPushMethodMock.called).to.be.false;
  }).bind(this));

  it('when dispatch an action equals { type: "Test Action", ' +
      'navigationInfo: { succeeded: true, successNavigationRoute: undefined} } ' +
    'should does not call to hashHistory.push method', sinon.test(() => {
    //Arrange
    let sinon: Sinon.SinonStatic = this;

    let hashHistoryPushMethodMock = sinon.stub(hashHistory, 'push');
    let middleWares = [navigationMiddleware];
    let createStore = configureStore(middleWares);
    let mockStore = createStore({});

    let navigationInfo = new NavigationInfo();
    navigationInfo.succeeded = true;
    navigationInfo.successNavigationRoute = undefined;

    let action = {
      type: "Test Action",
      navigationInfo: navigationInfo
    };

    //Act
    mockStore.dispatch(action);

    //Assert
    expect(hashHistoryPushMethodMock.called).to.be.false;
  }).bind(this));

  it('when dispatch an action equals { type: "Test Action", ' +
      'navigationInfo: { succeeded: true, successNavigationRoute: "Test success Route"} } ' +
    'should calls to hashHistory.push method with parameter equals "Test success Route"', sinon.test(() => {
    //Arrange
    let sinon: Sinon.SinonStatic = this;

    let hashHistoryPushMethodMock = sinon.stub(hashHistory, 'push');
    let middleWares = [navigationMiddleware];
    let createStore = configureStore(middleWares);
    let mockStore = createStore({});

    let navigationInfo = new NavigationInfo();
    navigationInfo.succeeded = true;
    navigationInfo.successNavigationRoute = "Test success Route";

    let action = {
      type: "Test Action",
      navigationInfo: navigationInfo
    };

    //Act
    mockStore.dispatch(action);

    //Assert
    expect(hashHistoryPushMethodMock.called).to.be.true;
    expect(hashHistoryPushMethodMock.calledWith("Test success Route")).to.be.true;
  }).bind(this));
});
