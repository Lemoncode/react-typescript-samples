import { expect } from 'chai';
import * as deepFreeze from 'deep-freeze';
import { httpReducer, HttpState } from '../httpReducer';

describe('httpReducer', () => {
    it('should return new HttpState with default values when passing initialState equals undefined and action equals {}', () => {
        let initialState = undefined;
        let action = {};

        let finalState = httpReducer(initialState, action);

        expect(finalState).not.to.be.undefined;
        expect(finalState.httpCallsInProgress).to.be.false;
        expect(finalState.numberOfCalls).to.be.equal(0);
    });

    it('should return new HttpState with default values when passing initialState equals new HttpState() and action equals {}', () => {
        let initialState = new HttpState();
        let action = {};

        let finalState = httpReducer(initialState, action);

        expect(finalState).not.to.be.undefined;
        expect(finalState.httpCallsInProgress).to.be.false;
        expect(finalState.numberOfCalls).to.be.equal(0);
    });

    it('should return new HttpState with same values when passing initialState with HttpState.httpCallsInProgress equals false '+
        'and action equals {}', () => {
        let initialState = new HttpState();
        initialState.httpCallsInProgress = false;
        let action = {};

        deepFreeze(initialState);
        let finalState = httpReducer(initialState, action);

        expect(finalState.httpCallsInProgress).to.be.false;
    });

    it('should return new HttpState with same values when passing initialState with HttpState.numberOfCalls equals 2 '+
        'and action equals {}', () => {
        let initialState = new HttpState();
        initialState.numberOfCalls = 2;
        let action = {};

        deepFreeze(initialState);
        let finalState = httpReducer(initialState, action);

        expect(finalState.numberOfCalls).to.be.equal(2);
    });

    it('should return new HttpState with numberOfCalls equals 1 and httpCallsInProgress equals true when passing initialState equals new HttpState() '+
        'and action equals { type: "HTTP_GET_CALL_STARTED" }', () => {
        let initialState = new HttpState();
        let action = {
            type: "HTTP_GET_CALL_STARTED"
        };

        deepFreeze(initialState);
        let finalState = httpReducer(initialState, action);

        expect(finalState.numberOfCalls).to.be.equal(1);
        expect(finalState.httpCallsInProgress).to.be.true;
    });

    it('should return new HttpState with numberOfCalls equals 3 and httpCallsInProgress equals true when passing initialState with '+
        'HttpState.numberOfCalls equals 2 and action equals { type: "HTTP_GET_CALL_STARTED" }', () => {
        let initialState = new HttpState();
        initialState.numberOfCalls = 2;

        let action = {
            type: "HTTP_GET_CALL_STARTED"
        };

        deepFreeze(initialState);
        let finalState = httpReducer(initialState, action);

        expect(finalState.numberOfCalls).to.be.equal(3);
        expect(finalState.httpCallsInProgress).to.be.true;
    });

    it('should return new HttpState with numberOfCalls equals 0 and httpCallsInProgress equals false when passing initialState equals new HttpState() '+
        'and action equals { type: "HTTP_GET_CALL_COMPLETED" }', () => {
        let initialState = new HttpState();
        let action = {
            type: "HTTP_GET_CALL_COMPLETED"
        };

        deepFreeze(initialState);
        let finalState = httpReducer(initialState, action);

        expect(finalState.numberOfCalls).to.be.equal(0);
        expect(finalState.httpCallsInProgress).to.be.false;
    });

    it('should return new HttpState with numberOfCalls equals 0 and httpCallsInProgress equals false when passing initialState with '+
        'HttpState equals {numberOfCalls: 1, httpCallsInProgress: true} and action equals { type: "HTTP_GET_CALL_COMPLETED" }', () => {
        let initialState = new HttpState();
        initialState.numberOfCalls = 1;
        initialState.httpCallsInProgress = true;

        let action = {
            type: "HTTP_GET_CALL_COMPLETED"
        };

        deepFreeze(initialState);
        let finalState = httpReducer(initialState, action);

        expect(finalState.numberOfCalls).to.be.equal(0);
        expect(finalState.httpCallsInProgress).to.be.false;
    });

    it('should return new HttpState with numberOfCalls equals 1 and httpCallsInProgress equals true when passing initialState with '+
        'HttpState equals {numberOfCalls: 2, httpCallsInProgress: true} and action equals { type: "HTTP_GET_CALL_COMPLETED" }', () => {
        let initialState = new HttpState();
        initialState.numberOfCalls = 2;
        initialState.httpCallsInProgress = true;

        let action = {
            type: "HTTP_GET_CALL_COMPLETED"
        };

        deepFreeze(initialState);
        let finalState = httpReducer(initialState, action);

        expect(finalState.numberOfCalls).to.be.equal(1);
        expect(finalState.httpCallsInProgress).to.be.true;
    });
})
