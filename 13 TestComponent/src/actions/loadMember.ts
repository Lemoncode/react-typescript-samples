import memberAPI from '../api/memberAPI';

const loadMember = (id : number) => {
   return {
     type: 'MEMBER_LOAD'
     ,member: memberAPI.getMemberById(id)
   }
}

export {
    loadMember
};
