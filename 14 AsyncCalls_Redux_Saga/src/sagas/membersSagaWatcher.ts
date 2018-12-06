import { fork, all, takeLatest } from 'redux-saga/effects';
import { fetchMembers } from './membersSaga';
import { actionTypes } from '../common/constants/actionTypes';

// add here all your watchers
// https://github.com/yelouafi/redux-saga/blob/master/examples/real-world/sagas/index.js
function* watchLoadMembersRequest() {
  yield takeLatest(actionTypes.FETCH_MEMBER_REQUEST_START, fetchMembers);
}

// Register all your watchers
export default function* root() {
  yield all([
    fork(watchLoadMembersRequest),
  ])
}

// fork(yield takeLatest(actionTypes.FETCH_MEMBER_REQUEST_START, fetchMembers)),
