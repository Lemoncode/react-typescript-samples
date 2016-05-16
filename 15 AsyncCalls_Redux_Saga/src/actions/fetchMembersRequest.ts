import memberAPI from '../api/memberAPI';

const fetchMembersRequest = () => {
   return {
     type: 'FETCH_MEMBERS_REQUEST'
   }
}

export default fetchMembersRequest;
