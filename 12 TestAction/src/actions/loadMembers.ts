import * as Q from 'q';
import MemberEntity from '../api/memberEntity';
import memberAPI from '../api/memberAPI';
import assignMembers from './assignMembers';

function loadMembers() {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return dispatcher => {
    var promise : Q.Promise<MemberEntity[]>;

    promise = memberAPI.getAllMembersAsync();

    promise.then(
      data => dispatcher(assignMembers(data))
    );

    return promise;
  };
}

export default loadMembers;
