import MemberEntity from '../api/memberEntity';
import MemberAPI from '../api/memberAPI';
import assignMembers from './assignMembers'

function loadMembers() {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatcher) {
    return MemberAPI.getAllMembersAsync(dispatcher).then(
      data => dispatcher(assignMembers(data))
    );
  };
}

export default loadMembers;
