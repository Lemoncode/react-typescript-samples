import MemberEntity from "../api/memberEntity";
import MemberAPI from "../api/memberAPI";
import objectAssign = require('object-assign');
import MemberFormErrors from "../validations/memberFormErrors"
import MemberFormValidator from "../validations/memberFormValidator"


let emptyMemberEntity = new MemberEntity();

class MemberState  {
  member : MemberEntity;
  memberId : number;
  errors : MemberFormErrors;
  isValid : boolean;
  saveCompleted : boolean;

  public constructor()
  {
    this.member = new MemberEntity();
    this.memberId = -1;
    this.errors = new MemberFormErrors();
    this.isValid = false;
    this.saveCompleted = false;
  }
}


// Just to show how combine reducers work, we have
// divided into two reducers member load + member load/update/delete
export default (state : MemberState = new MemberState(), action) => {
  let newState : MemberState = null;

  switch (action.type) {
    case 'MEMBER_INITIALIZE_NEW':
      newState = objectAssign({}, state, {member: new MemberEntity(), errors: new MemberFormErrors(), isValid: false});
      return newState;

    case 'MEMBER_LOAD':
      let member : MemberEntity;
      let memberId : number = action["id"];

      member = MemberAPI.getMemberById(memberId);
      newState = objectAssign({}, state, {dirty: false, member: member, errors: new MemberFormErrors(), isValid: true});

      return newState;

    case 'MEMBER_UI_INPUT':
      let fieldName = action['fieldName'];
      let value = action['value']

      let newMember : MemberEntity = objectAssign({}, state.member, {});
      newMember[fieldName] = value;

      newState = objectAssign({}, state, {member: newMember, dirty: true});
      return newState;

    case 'MEMBER_SAVE':
      let errorsSave : MemberFormErrors = MemberFormValidator.validateMember(state.member);

      if(errorsSave.isEntityValid == true) {
        MemberAPI.saveAuthor(state.member);

        newState = objectAssign({}, state, {saveCompleted: true});
      } else {
        newState = objectAssign({}, state, {isValid: errorsSave.isEntityValid, errors: errorsSave});
      }

      return newState;

    case 'MEMBER_RESET_SAVE_COMPLETED':
      newState = objectAssign({}, state, {saveCompleted: false});
      return newState;

    default:
      return state;
  }

};
