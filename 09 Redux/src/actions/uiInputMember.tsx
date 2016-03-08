import MemberEntity from "../api/MemberEntity"

const uiInputMember = (member : MemberEntity) => {
   return {
     type: 'MEMBER_UI_INPUT'
     ,member: member
   }
}

export default uiInputMember;
