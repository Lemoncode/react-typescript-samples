import MemberEntity from "../api/MemberEntity";
import memberAPI from '../api/memberAPI';
import MemberFormErrors from '../validations/memberFormErrors';
import MemberFormValidator from '../validations/memberFormValidator';

const saveMember = (member : MemberEntity) => {
  // Candidate to be splitted
  let errorsSave : MemberFormErrors = MemberFormValidator.validateMember(member);

  if(errorsSave.isEntityValid) {
    memberAPI.saveAuthor(member);
  }

   return {
     type: 'MEMBER_SAVE'
     ,errors : errorsSave
   }
}

export default saveMember;
