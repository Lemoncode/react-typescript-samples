import MemberEntity from './../api/memberEntity'

const validateMember = (member : MemberEntity) => {
   return {
     type: 'MEMBER_VALIDATE'
     ,member: member
   }
}

export default validateMember;
