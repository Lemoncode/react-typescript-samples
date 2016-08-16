import MemberEntity from "../api/memberEntity";
import objectAssign = require('object-assign');
import MemberFormErrors from "../validations/memberFormErrors";


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
    newState = objectAssign({}, state, {dirty: false, member: action.member, errors: new MemberFormErrors(), isValid: true});

    return newState;

    case 'MEMBER_UI_INPUT':
      let fieldName = action['fieldName'];
      let value = action['value']

      let newMember : MemberEntity = objectAssign({}, state.member, {});
      newMember[fieldName] = value;

      newState = objectAssign({}, state, {member: newMember, dirty: true});
      return newState;

    case 'MEMBER_SAVE':
      if(action.errors.isEntityValid) {
        newState = objectAssign({}, state, {saveCompleted: true});
      } else {
        newState = objectAssign({}, state, {isValid: action.errors.isEntityValid, errors: action.errors});
      }

    return newState;

    case 'MEMBER_RESET_SAVE_COMPLETED':
      newState = objectAssign({}, state, {saveCompleted: false});
      return newState;

    default:
      return state;
  }

};
