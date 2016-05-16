import memberAPI from '../api/memberAPI';
import assignMembers from './assignMembers';

const loadMembers = () => {
   return {
     type: 'LOAD_MEMBERS_REQUEST'
   }
}

export default loadMembers;
