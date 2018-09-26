import { actionTypes } from '../common/constants/actionTypes';
import { MemberEntity } from '../model';

export const membersReducer = (state: MemberEntity[] = [], action) => {
  switch (action.type) {
   /*  case actionTypes.FETCH_MEMBERS_COMPLETED:
      return handleFetchMembersCompleted(state, action.payload); */
    case actionTypes.FETCH_MEMBERS_COMPLETED_SAGA:
      return handleFetchMembersCompletedSaga(state, action.payload);
  }

  return state;
};

const handleFetchMembersCompleted = (state: MemberEntity[], payload: MemberEntity[]) => {
  return payload;
};
const handleFetchMembersCompletedSaga = (state: MemberEntity[], payload: MemberEntity[]) => {
  console.log(`I'm using SAGA`);
  return payload;
};
