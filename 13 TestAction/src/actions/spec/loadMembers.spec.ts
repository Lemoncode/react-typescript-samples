import { expect } from 'chai';
import configureStore = require('redux-mock-store');
import loadMembers from '../loadMembers';
import MemberEntity from '../../api/memberEntity';
import memberAPI from '../../api/memberAPI';
import ReduxThunk from 'redux-thunk';

const middlewares = [ ReduxThunk ];
const mockStore = configureStore(middlewares);

describe('loadMembers', () => {
  it('should chain action MEMBERS_ASSIGN', (done) => {
    let member1 = new MemberEntity();
    let member2 = new MemberEntity();

    member1.login = "test1";
    member2.login = "test2"

    let expectedMembers : Array<MemberEntity> = [member1, member2];

    // Arrange
    sinon.stub(memberAPI, 'getAllMembersAsync').returns({
      then: callback => {
        callback(expectedMembers);        
      }
    });

    const expectedActions = [
          { type: 'MEMBERS_ASSIGN', members: expectedMembers }
        ]

    // Act
    const store = mockStore([]);


    store.dispatch(loadMembers()).then(() => {
        expect(store.getActions()[0].type).to.be.equal((expectedActions[0].type));
        expect(store.getActions()[0].members.length).to.be.equal(2);
        done();
      });
  });
});
