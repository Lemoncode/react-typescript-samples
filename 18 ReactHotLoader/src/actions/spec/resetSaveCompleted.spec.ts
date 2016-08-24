import { expect } from 'chai';
import { resetSaveCompleted } from '../resetSaveCompleted';

describe('resetSaveCompleted', () => {
    it('should return an action equals { type: MEMBER_RESET_SAVE_COMPLETED } when calling resetSaveCompleted', () => {
        // Arrange

        // Act
        let result = resetSaveCompleted();

        // Assert
        expect(result.type).to.be.equal('MEMBER_RESET_SAVE_COMPLETED');
    });
})
