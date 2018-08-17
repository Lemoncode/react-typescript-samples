import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
import { trackPromise } from 'react-promise-tracker';

export const fetchMembersAction = () => (dispatch) => (
  trackPromise(
    memberAPI.fetchMembersAsync()
    .then((members) => {
      dispatch(fetchMembersCompleted(members));
    })
  )
);
export const fetchMembers = () => (dispatch) => (
  trackPromise(
    memberAPI.fetchMembers()
    .then((members) => {
      dispatch(fetchMembersCompleted(members));
    })
  )
  );

const fetchMembersCompleted = (members: MemberEntity[]=[]) => ({
  type: actionTypes.FETCH_MEMBERS_COMPLETED,
  payload: members
});
