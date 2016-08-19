import { expect } from 'chai';
import httpCallCompleted from '../httpCallCompleted';

describe('httpCallCompleted', () => {
    it('should return http action type: HTTP_GET_CALL_COMPLETED when calling httpCallCompleted', () => {
        // Arrange

        // Act
        let result = httpCallCompleted();

        // Assert
        expect(result.type).to.be.equal('HTTP_GET_CALL_COMPLETED');
    });
})
