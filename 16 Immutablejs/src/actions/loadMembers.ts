import MemberEntity from '../api/memberEntity';
import MemberAPI from '../api/memberAPI';
import assignMembers from './assignMembers';
import * as Q from 'q';

function loadMembers() {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return dispatcher => {
    var promise : Q.Promise<MemberEntity[]>;

    promise = MemberAPI.getAllMembersAsync();

    promise.then(
      data => dispatcher(assignMembers(data))
    );

    return promise;
  };
}

export {
    loadMembers
};
