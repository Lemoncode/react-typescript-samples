import { expect} from 'chai'
import membersReducer from "../membersReducer"


describe('membersReducer', () => {
  it('should return empty array state', () => {
      let finalState = membersReducer(null, null);
      expect(finalState.length).to.be.equal(0);
    })
});
