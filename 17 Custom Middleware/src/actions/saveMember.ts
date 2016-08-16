import MemberEntity from "../api/MemberEntity";
import memberAPI from '../api/memberAPI';
import MemberFormErrors from '../validations/memberFormErrors';
import MemberFormValidator from '../validations/memberFormValidator';
import {UINotificationInfo} from '../middleware/uiNotificationInfo';

const saveMember = (member : MemberEntity, notificationInfo : UINotificationInfo = null) => {
  // Candidate to be splitted
  let errorsSave : MemberFormErrors = MemberFormValidator.validateMember(member);

  if(errorsSave.isEntityValid) {
    try {
      memberAPI.saveAuthor(member);
      notificationInfo.succeeded = true;
    }
    catch(e) {
      notificationInfo.succeeded = false;
    }
  }

   return {
     type: 'MEMBER_SAVE'
     ,errors : errorsSave
     ,uiNotificationInfo : notificationInfo
   }
}

export default saveMember;
