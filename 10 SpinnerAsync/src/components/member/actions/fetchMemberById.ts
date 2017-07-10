import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
import { httpCallStartAction } from '../../../middlewares/http/actions';

export const fetchMemberByIdAction = (id: number) => (dispatch) => {
  dispatch(httpCallStartAction());
  memberAPI.fetchMemberById(id)
    .then((member) => {
      dispatch(fetchMemberByIdCompleted(member));
    });
};

const fetchMemberByIdCompleted = (member: MemberEntity) => ({
  type: actionTypes.FETCH_MEMBER_BY_ID_COMPLETED,
  payload: member,
  meta: {
    httpEnd: true,
  },
});
