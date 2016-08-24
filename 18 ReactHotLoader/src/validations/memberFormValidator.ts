import MemberEntity from '../api/MemberEntity'
import MemberFormErrors from './memberFormErrors'

class memberFormValidator {
    public validateMember(member : MemberEntity) : MemberFormErrors
    {
      let memberFormErrors : MemberFormErrors = new MemberFormErrors();
      memberFormErrors.isEntityValid = true;

      if (member.login.length < 3) {
        memberFormErrors.login = 'Login must be at least 3 characters.';
        memberFormErrors.isEntityValid = false;
      }

      return memberFormErrors;
    }
}

export default new memberFormValidator();
