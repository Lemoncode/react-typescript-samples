import MemberEntity from '../api/memberEntity';
import MemberAPI from '../api/memberAPI';
import assignMembers from './assignMembers'

function loadMembers() {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch) {
    return MemberAPI.getAllMembersAsync().then(
      data => dispatch(assignMembers(data))
    );
  };
}

export default loadMembers;
