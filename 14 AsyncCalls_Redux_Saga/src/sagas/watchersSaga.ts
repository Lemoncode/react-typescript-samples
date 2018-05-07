import { takeLatest } from 'redux-saga'
import { fork } from 'redux-saga/effects'
import {fetchMembers} from './membersSaga';

// add here all your watchers
// https://github.com/yelouafi/redux-saga/blob/master/examples/real-world/sagas/index.js
function* watchLoadMembersRequest() {
  while(true) {
    yield* takeLatest('FETCH_MEMBERS_REQUEST', fetchMembers)
  }
}


// Register all your watchers
export default function* root() {
  yield [
    fork(watchLoadMembersRequest),
  ]
}
