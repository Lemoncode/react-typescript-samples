import { expect } from 'chai';
import configureStore = require('redux-mock-store');
import * as toastr from 'toastr';
import { uiNotificationMiddleware } from '../uiNotificationMware';
import { UINotificationInfo } from '../uiNotificationInfo';

describe('uiNotificationMware', () => {
  it('when dispatch an action equals { type: "Test Action" } ' +
    'should does not call to toastr.success or toastr.error methods', sinon.test(() => {
    //Arrange
    let sinon: Sinon.SinonStatic = this;

    let toastrSuccessMethodMock = sinon.stub(toastr, 'success');
    let toastrErrorMethodMock = sinon.stub(toastr, 'error');
    let middleWares = [uiNotificationMiddleware];
    let createStore = configureStore(middleWares);
    let mockStore = createStore({});

    let action = {
      type: "Test Action"
    };

    //Act
    mockStore.dispatch(action);

    //Assert
    expect(toastrSuccessMethodMock.called).to.be.false;
    expect(toastrErrorMethodMock.called).to.be.false;
  }).bind(this));

  it('when dispatch an action equals { type: "Test Action", uiNotificationInfo: null } ' +
    'should does not call to toastr.success or toastr.error methods', sinon.test(() => {
    //Arrange
    let sinon: Sinon.SinonStatic = this;

    let toastrSuccessMethodMock = sinon.stub(toastr, 'success');
    let toastrErrorMethodMock = sinon.stub(toastr, 'error');
    let middleWares = [uiNotificationMiddleware];
    let createStore = configureStore(middleWares);
    let mockStore = createStore({});

    let action = {
      type: "Test Action",
      uiNotificationInfo: null
    };

    //Act
    mockStore.dispatch(action);

    //Assert
    expect(toastrSuccessMethodMock.called).to.be.false;
    expect(toastrErrorMethodMock.called).to.be.false;
  }).bind(this));

  it('when dispatch an action equals { type: "Test Action", uiNotificationInfo: undefined } ' +
    'should does not call to toastr.success or toastr.error methods', sinon.test(() => {
    //Arrange
    let sinon: Sinon.SinonStatic = this;

    let toastrSuccessMethodMock = sinon.stub(toastr, 'success');
    let toastrErrorMethodMock = sinon.stub(toastr, 'error');
    let middleWares = [uiNotificationMiddleware];
    let createStore = configureStore(middleWares);
    let mockStore = createStore({});

    let action = {
      type: "Test Action",
      uiNotificationInfo: undefined
    };

    //Act
    mockStore.dispatch(action);

    //Assert
    expect(toastrSuccessMethodMock.called).to.be.false;
    expect(toastrErrorMethodMock.called).to.be.false;
  }).bind(this));

  it('when dispatch an action equals { type: "Test Action", ' +
      'uiNotificationInfo: { succeeded: true, successMessage: "Test success Message" } } ' +
    'should call to toastr.success methods with parameter equals "Test success Message"', sinon.test(() => {
    //Arrange
    let sinon: Sinon.SinonStatic = this;

    let toastrSuccessMethodMock = sinon.stub(toastr, 'success');
    let toastrErrorMethodMock = sinon.stub(toastr, 'error');
    let middleWares = [uiNotificationMiddleware];
    let createStore = configureStore(middleWares);
    let mockStore = createStore({});

    let uiNotificationInfo = new UINotificationInfo();
    uiNotificationInfo.succeeded = true;
    uiNotificationInfo.successMessage = "Test success Message";

    let action = {
      type: "Test Action",
      uiNotificationInfo: uiNotificationInfo
    };

    //Act
    mockStore.dispatch(action);

    //Assert
    expect(toastrSuccessMethodMock.called).to.be.true;
    expect(toastrSuccessMethodMock.calledWith("Test success Message")).to.be.true;
    expect(toastrErrorMethodMock.called).to.be.false;
  }).bind(this));

  it('when dispatch an action equals { type: "Test Action", ' +
      'uiNotificationInfo: { succeeded: false, errorMessage: "Test error Message" } } ' +
    'should call to toastr.error methods with parameter equals "Test error Message"', sinon.test(() => {
    //Arrange
    let sinon: Sinon.SinonStatic = this;

    let toastrSuccessMethodMock = sinon.stub(toastr, 'success');
    let toastrErrorMethodMock = sinon.stub(toastr, 'error');
    let middleWares = [uiNotificationMiddleware];
    let createStore = configureStore(middleWares);
    let mockStore = createStore({});

    let uiNotificationInfo = new UINotificationInfo();
    uiNotificationInfo.succeeded = false;
    uiNotificationInfo.errorMessage = "Test error Message";

    let action = {
      type: "Test Action",
      uiNotificationInfo: uiNotificationInfo
    };

    //Act
    mockStore.dispatch(action);

    //Assert
    expect(toastrSuccessMethodMock.called).to.be.false;
    expect(toastrErrorMethodMock.called).to.be.true;
    expect(toastrErrorMethodMock.calledWith("Test error Message")).to.be.true;
  }).bind(this));
});