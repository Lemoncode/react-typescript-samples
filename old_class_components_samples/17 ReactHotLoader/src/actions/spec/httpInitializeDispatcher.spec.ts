import { expect } from 'chai';
import { httpInitializeDispatcher } from '../httpInitializeDispatcher';
import http from '../../http/http';

describe('httpInitializeDispatcher', () => {
    it('should return http action type: HTTP_INITIALIZE_DISPATCHER and calls to http.Initialize(dispatcher) method ' +
        'when passing dispatcher equals empty object', sinon.test(() => {
        // Arrange
        let sinon: Sinon.SinonStatic = this;
        let dispatcher = {};

        let httpInitializeMethodStub = sinon.stub(http, "Initialize");
        // Act
        let result = httpInitializeDispatcher(dispatcher);

        // Assert
        expect(result.type).to.be.equal('HTTP_INITIALIZE_DISPATCHER');
        expect(httpInitializeMethodStub.called).to.be.true;
        expect(httpInitializeMethodStub.calledWith(dispatcher)).to.be.true;
    }).bind(this));

    it('should return http action type: HTTP_INITIALIZE_DISPATCHER and calls to http.Initialize(dispatcher) method ' +
        'when passing dispatcher equals { testField: "test" }', sinon.test(() => {
        // Arrange
        let sinon: Sinon.SinonStatic = this;
        let dispatcher = {
            testField: "test"
        };

        let httpInitializeMethodStub = sinon.stub(http, "Initialize");
        // Act
        let result = httpInitializeDispatcher(dispatcher);

        // Assert
        expect(result.type).to.be.equal('HTTP_INITIALIZE_DISPATCHER');
        expect(httpInitializeMethodStub.called).to.be.true;
        expect(httpInitializeMethodStub.calledWith(dispatcher)).to.be.true;
    }).bind(this));
})
