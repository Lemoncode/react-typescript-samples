import MemberEntity from "../api/memberEntity";
import MemberAPI from "../api/memberAPI";

let emptyMemberEntity = new MemberEntity();

class MemberState  {
  member : MemberEntity;
  memberId : number;
}

// Just to show how combine reducers work, we have
// divided into two reducers member load + member load/update/delete
export default (state : MemberState = { member: emptyMemberEntity, memberId: -1}, action) => {
  switch (action.type) {
    case 'MEMBER_LOAD':
      let member : MemberEntity;
      let memberId : number = action["id"];

      member = MemberAPI.getMemberById(memberId);

      return {member : member};

    default:
      return state;
  }

};
