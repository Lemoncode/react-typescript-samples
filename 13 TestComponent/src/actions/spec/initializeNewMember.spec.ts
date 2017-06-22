import { expect } from 'chai';
import { initializeNewMember } from '../initializeNewMember';

describe('initializeNewMember', () => {
    it('should return http action type: MEMBER_INITIALIZE_NEW when calling initializeNewMember', () => {
        // Arrange

        // Act
        let result = initializeNewMember();

        // Assert
        expect(result.type).to.be.equal('MEMBER_INITIALIZE_NEW');
    });
})
