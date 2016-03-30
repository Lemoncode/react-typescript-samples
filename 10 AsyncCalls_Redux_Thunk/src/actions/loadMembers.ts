import memberAPI from '../api/memberAPI';
import assignMembers from './assignMembers';

function loadMembers() {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch) {
    return memberAPI.getAllMembersAsync().then(
      data => dispatch(assignMembers(data))
    );
  };
}

export default loadMembers;
