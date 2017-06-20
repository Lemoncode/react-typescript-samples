import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';

export const fetchMemberByIdAction = (id: number) => (dispatch) => {
  memberAPI.fetchMemberById(id)
    .then(dispatch(fetchMemberByIdCompleted));
};

const fetchMemberByIdCompleted = (member: MemberEntity) => ({
  type: actionTypes.FETCH_MEMBER_BY_ID_COMPLETED,
  payload: member,
});
