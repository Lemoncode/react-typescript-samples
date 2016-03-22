import { expect } from 'chai';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import SpinnerContainer from '../spinnerContainer';
import { Provider } from 'react-redux';
import configureStore = require('redux-mock-store');

const createStore = configureStore();
describe('Spinner presentational component', () =>{
    it('should renders null and calls to initializeHttp method when passing showSpinner ' +
        'equals undefined and initializeHttp method like props', () => {

        let mockStore = createStore({
            http: {
                httpCallsInProgress: true
            }
        });

        let spinnerWrapper = mount(
            <Provider store={mockStore}>
                <SpinnerContainer />
            </Provider>
        );

        expect(spinnerWrapper.find('Spinner').prop('showSpinner')).to.be.true;
    });
})
