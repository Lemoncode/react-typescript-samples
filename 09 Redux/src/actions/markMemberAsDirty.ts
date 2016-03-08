const markMemberAsDirty = (dirty : boolean) => {
   return {
     type: 'MEMBER_DIRTY'
     ,dirty: dirty
   }
}

export default markMemberAsDirty;
