import { expect } from 'chai';
import * as React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../spinner';

describe('Spinner presentational component', () =>{
    it('should renders null and calls to initializeHttp method when passing showSpinner ' +
        'equals undefined and initializeHttp method like props', () => {
        let showSpinner = undefined;
        let initializeHttp = sinon.spy();
        let spinnerWrapper = shallow(
            <Spinner showSpinner={showSpinner} initializeHttp={initializeHttp}/>
        );

        expect(spinnerWrapper.type()).to.be.null;
        expect(initializeHttp.calledOnce).to.be.true;
    });

    it('should renders null and calls to initializeHttp method when passing showSpinner ' +
        'equals null and initializeHttp method like props', () => {
        let showSpinner = null;
        let initializeHttp = sinon.spy();
        let spinnerWrapper = shallow(
            <Spinner showSpinner={showSpinner} initializeHttp={initializeHttp}/>
        );

        expect(spinnerWrapper.type()).to.be.null;
        expect(initializeHttp.calledOnce).to.be.true;
    });

    it('should renders null and calls to initializeHttp method when passing showSpinner ' +
        'equals false and initializeHttp method like props', () => {
        let showSpinner = false;
        let initializeHttp = sinon.spy();
        let spinnerWrapper = shallow(
            <Spinner showSpinner={showSpinner} initializeHttp={initializeHttp}/>
        );

        expect(spinnerWrapper.type()).to.be.null;
        expect(initializeHttp.calledOnce).to.be.true;
    });

    it('should renders spinner and calls to initializeHttp method when passing showSpinner ' +
        'equals true and initializeHttp method like props', () => {
        let showSpinner = true;
        let initializeHttp = sinon.spy();
        let spinnerWrapper = shallow(
            <Spinner showSpinner={showSpinner} initializeHttp={initializeHttp}/>
        );

        expect(spinnerWrapper.contains(
            <div className="spinnerWrap">
              <div className="spinnerOverlay"></div>
              <div className="vertical-offset">
                <div id="spinner">
                  Loading...
                </div>
              </div>
            </div>
        )).to.be.true;
        expect(initializeHttp.calledOnce).to.be.true;
    });
})
