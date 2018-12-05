import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
import { trackPromise } from 'react-promise-tracker';

export const fetchMembersAction = () => (dispatch) => {
  trackPromise(
    memberAPI.fetchMembersAsync()
    .then((members) => {
      dispatch(fetchMembersActionSaga(members));
    })
  );
};

export const fetchMembersActionSaga = (members: MemberEntity[]) => (
  {
    type: actionTypes.FETCH_MEMBER_REQUEST,
    payload: members,
  }
);

