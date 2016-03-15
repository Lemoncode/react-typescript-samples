import memberAPI from '../api/memberAPI';


const loadMembers = () => {
   return {
     type: 'MEMBERS_LOAD'
     ,members : memberAPI.getAllMembers()
   }
}

export default loadMembers;
