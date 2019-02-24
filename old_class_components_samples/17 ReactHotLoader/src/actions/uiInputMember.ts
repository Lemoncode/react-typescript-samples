const uiInputMember = (fieldName : string, value: any) => {
   return {
     type: 'MEMBER_UI_INPUT'
     ,fieldName : fieldName
     ,value: value
   }
}

export {
    uiInputMember
};
