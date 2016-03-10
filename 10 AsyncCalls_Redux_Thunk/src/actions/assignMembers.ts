import MemberEntity from '../api/memberEntity';


const assignMembers = (members : any) => {
   return {
     type: 'MEMBERS_ASSIGN'
     ,members: members
   }
 }

export default assignMembers;
