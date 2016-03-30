import { expect } from 'chai';
import configureStore = require('redux-mock-store');
import { loadMembers } from '../loadMembers';
import MemberEntity from '../../api/memberEntity';
import memberAPI from '../../api/memberAPI';
import ReduxThunk from 'redux-thunk';

const middlewares = [ ReduxThunk ];
const mockStore = configureStore(middlewares);

describe('loadMembers', () => {
  it('should return a promise, and this promise dispatch assignMembers action that returns ' +
    'an action equals { type: MEMBERS_ASSIGN, members: expectedMembers }', sinon.test((done) => {
    let sinon: Sinon.SinonStatic = this;
    let member1 = new MemberEntity();
    let member2 = new MemberEntity();

    member1.login = "test1";
    member2.login = "test2"

    let expectedMembers : Array<MemberEntity> = [member1, member2];

    // Arrange
    let getAllMembersAsyncMethodStub = sinon.stub(memberAPI, 'getAllMembersAsync');
    getAllMembersAsyncMethodStub.returns({
      then: callback => {
        callback(expectedMembers);
      }
    });

    const expectedAction = {
      type: 'MEMBERS_ASSIGN',
      members: expectedMembers
    }

    // Act
    const store = mockStore([]);

    store.dispatch(loadMembers())
      .then(() => {
        expect(store.getActions()[0].type).to.be.equal((expectedAction.type));
        expect(store.getActions()[0].members.length).to.be.equal(2);
        done();
      });
  }).bind(this));
});
