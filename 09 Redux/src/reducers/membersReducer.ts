import MemberEntity from "../api/memberEntity";
import MemberAPI from "../api/memberAPI";

// Just to show how combine reducers work, we have
// divided into two reducers member load + member load/update/delete
export default (state : Array<MemberEntity> = [], action) => {
  switch (action.type) {
    case 'MEMBERS_LOAD':
      // Using fake API let's return a fresh array
      return [...action.members];

    default:
      return state;
  }

};
