import { expect } from 'chai';
import * as deepFreeze from 'deep-freeze';
import membersReducer from '../membersReducer';
import MemberEntity from '../../api/memberEntity';

describe('membersReducer', () => {
  it('should return empty array state when passing initialState equals undefined and action equals {}', () => {
      let initialState = undefined;
      let action = {};

      let finalState = membersReducer(initialState, action);

      expect(finalState.length).to.be.equal(0);
  });

  it('should return empty array state when passing initialState equals [] and action equals {}', () => {
      let initialState = [];
      let action = {};

      // Check that state is inmutable
      deepFreeze(initialState);
      let finalState = membersReducer(initialState, action);

      expect(finalState.length).to.be.equal(0);
  });

  it('should return new array with same items when passing initialState equals [member1, member2] and action equals {}', () => {
      let member1 = new MemberEntity();
      let member2 = new MemberEntity();

      member1.login = "test1";
      member2.login = "test2"

      let initialState : Array<MemberEntity> = [member1, member2];
      let action = {};

      // Check that state is inmutable
      deepFreeze(initialState);
      let finalState = membersReducer(initialState, action);

      expect(finalState.length).to.be.equal(2);
      expect(finalState[0].login).to.be.equal("test1");
      expect(finalState[1].login).to.be.equal("test2");
    });

    it('should return new array with items when passing initialState equals [] and action equals ' +
      '{ type: "MEMBERS_ASSIGN", members: [member1, member2]}', () => {
        let member1 = new MemberEntity();
        let member2 = new MemberEntity();

        member1.login = "test1";
        member2.login = "test2"
        let members : Array<MemberEntity> = [member1, member2];

        let initialState = [];
        let action = {type: 'MEMBERS_ASSIGN', members: members};

        // Check that state is inmutable
        deepFreeze(initialState);
        let finalState = membersReducer(initialState, action);

        expect(finalState.length).to.be.equal(2);
        expect(finalState[0].login).to.be.equal("test1");
        expect(finalState[1].login).to.be.equal("test2");
      });
});
