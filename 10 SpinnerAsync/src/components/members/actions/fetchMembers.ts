import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
import { httpCallStartAction } from '../../../middlewares/http/actions';

export const fetchMembersAction = () => (dispatch) => {
  dispatch(httpCallStartAction());
  memberAPI.fetchMembers()
    .then((members) => {
      dispatch(fetchMembersCompleted(members));
    });
};

const fetchMembersCompleted = (members: MemberEntity[]) => ({
  type: actionTypes.FETCH_MEMBERS_COMPLETED,
  payload: members,
  meta: {
    httpEnd: true,
  },
});
