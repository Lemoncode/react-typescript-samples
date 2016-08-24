import { expect } from 'chai';
import httpCallStarted from '../httpCallStarted';

describe('httpCallStarted', () => {
    it('should return http action type: HTTP_GET_CALL_STARTED when calling httpCallStarted', () => {
        // Arrange

        // Act
        let result = httpCallStarted();

        // Assert
        expect(result.type).to.be.equal('HTTP_GET_CALL_STARTED');
    });
})
