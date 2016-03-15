const loadMember = (id : number) => {
   return {
     type: 'MEMBER_LOAD'
     ,id: id
   }
}

export default loadMember;
