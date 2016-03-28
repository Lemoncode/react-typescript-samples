import { expect } from 'chai';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import SpinnerContainer from '../spinner.container';
import { Provider } from 'react-redux';
import configureStore = require('redux-mock-store');
import * as httpActions from '../../../actions/httpInitializeDispatcher';

const createStore = configureStore();
describe('Spinner container component', () =>{
    it('should renders Spinner presentational component and this has property showSpinner equals undefined and ' +
        'it calls to httpInitializeDispatcher when passing to store state equals ' +
        '{ http: { httpCallsInProgress: undefined } }', () => {

        let mockStore = createStore({
            http: {
                httpCallsInProgress: undefined
            }
        });

        let httpInitializeDispatcherActionStub = sinon.stub(httpActions, 'httpInitializeDispatcher');

        let spinnerWrapper = mount(
            <Provider store={mockStore}>
                <SpinnerContainer />
            </Provider>
        );

        httpInitializeDispatcherActionStub.restore();
        expect(spinnerWrapper.find('Spinner').prop('showSpinner')).to.be.undefined;
        expect(httpInitializeDispatcherActionStub.called).to.be.true;
    });

    it('should renders Spinner presentational component and this has property showSpinner equals false and ' +
        'it calls to httpInitializeDispatcher when passing to store state equals ' +
        '{ http: { httpCallsInProgress: false } }', () => {

        let mockStore = createStore({
            http: {
                httpCallsInProgress: false
            }
        });

        let httpInitializeDispatcherActionStub = sinon.stub(httpActions, 'httpInitializeDispatcher');

        let spinnerWrapper = mount(
            <Provider store={mockStore}>
                <SpinnerContainer />
            </Provider>
        );

        httpInitializeDispatcherActionStub.restore();
        expect(spinnerWrapper.find('Spinner').prop('showSpinner')).to.be.false;
        expect(httpInitializeDispatcherActionStub.called).to.be.true;
    });

    it('should renders Spinner presentational component and this has property showSpinner equals true and ' +
        'it calls to httpInitializeDispatcher when passing to store state equals ' +
        '{ http: { httpCallsInProgress: true } }', () => {

        let mockStore = createStore({
            http: {
                httpCallsInProgress: true
            }
        });

        let httpInitializeDispatcherActionStub = sinon.stub(httpActions, 'httpInitializeDispatcher');

        let spinnerWrapper = mount(
            <Provider store={mockStore}>
                <SpinnerContainer />
            </Provider>
        );

        httpInitializeDispatcherActionStub.restore();
        expect(spinnerWrapper.find('Spinner').prop('showSpinner')).to.be.true;
        expect(httpInitializeDispatcherActionStub.called).to.be.true;
    });
});
