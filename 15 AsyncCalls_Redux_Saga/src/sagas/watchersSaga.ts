import { takeLatest } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'
import {fetchMembers} from './membersSaga';
import loadMembers from '../actions/loadMembers';

// add here all your watchers
// https://github.com/yelouafi/redux-saga/blob/master/examples/real-world/sagas/index.js
function* watchLoadMembesRequest() {
  while(true) {
    yield* takeLatest('LOAD_MEMBERS_REQUEST', fetchMembers)
  }
}

// Register all your watchers
export default function* root() {
  yield [
    fork(watchLoadMembesRequest),
  ]
}
