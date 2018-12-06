import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
import { trackPromise } from 'react-promise-tracker';


export const fetchMembersStartAction = () => (
  {
    type: actionTypes.FETCH_MEMBER_REQUEST_START,
  }
);




export const fetchMembersCompletedAction = (members: MemberEntity[]) => (
  {
    type: actionTypes.FETCH_MEMBER_REQUEST_COMPLETED,
    payload: members,
  }
);

