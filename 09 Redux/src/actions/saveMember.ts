import MemberEntity from "../api/MemberEntity"

const saveMember = (member : MemberEntity) => {
   return {
     type: 'MEMBER_SAVE'
     ,member: member
   }
}

export default saveMember;
