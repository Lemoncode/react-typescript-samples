import { expect} from 'chai'
import * as deepFreeze from 'deep-freeze'
import membersReducer from '../membersReducer'
import MemberEntity from '../../api/memberEntity';

describe('membersReducer', () => {
  it('should return empty array state', () => {
      let finalState = membersReducer([], {});
      expect(finalState.length).to.be.equal(0);
    })

    it('should return new array same items as previous steps', () => {
        let member1 = new MemberEntity();
        let member2 = new MemberEntity();

        member1.login = "test1";
        member2.login = "test2"

        let initialState : Array<MemberEntity> = [member1, member2];

        // Check that state is inmutable
        deepFreeze(initialState);

        let finalState = membersReducer(initialState, {});
        //expect(finalState.length).to.be.equal(2);
        expect(finalState[0].login).to.be.equal("test1");
        expect(finalState[1].login).to.be.equal("test2");
      })

      it('should return new array same items as previous steps', () => {
          let member1 = new MemberEntity();
          let member2 = new MemberEntity();

          member1.login = "test1";
          member2.login = "test2"


          let LoadMemberActionsPayload : Array<MemberEntity> = [member1, member2];
          let stateA = membersReducer([], {});

          deepFreeze(stateA);

          let finalState = membersReducer(stateA, {type: 'MEMBERS_ASSIGN', members: LoadMemberActionsPayload});

          expect(finalState.length).to.be.equal(2);
          expect(finalState[0].login).to.be.equal("test1");
          expect(finalState[1].login).to.be.equal("test2");
        })


});
