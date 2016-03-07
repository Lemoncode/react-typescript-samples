import MemberEntity from "../api/memberEntity";
import MemberAPI from "../api/memberAPI";

// Just to show how combine reducers work, we have
// divided into two reducers member load + member load/update/delete
export default (state : {member : MemberEntity}, action) => {
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
