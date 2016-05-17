import MemberEntity from '../api/MemberEntity';

const fetchMembersCompleted = (members : Array<MemberEntity>) => {
   return {
     type: 'FETCH_MEMBERS_COMPLETED'
     ,members: members
   }
 }

export default fetchMembersCompleted;
