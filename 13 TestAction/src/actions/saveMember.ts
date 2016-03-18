import MemberEntity from "../api/MemberEntity";
import memberAPI from '../api/memberAPI';
import MemberFormErrors from '../validations/memberFormErrors';
import MemberFormValidator from '../validations/memberFormValidator';

const saveMember = (member : MemberEntity) => {
  // Candidate to be splitted
  let errorsSave : MemberFormErrors = MemberFormValidator.validateMember(member);

  if(errorsSave.isEntityValid) {
    // Since this is using fake api this method is synchronous
    // if you are looking for a sample that handles and async request
    // take look to the action file LoadMembers.ts
    memberAPI.saveAuthor(member);
  }

   return {
     type: 'MEMBER_SAVE'
     ,errors : errorsSave
   }
}

export default saveMember;
