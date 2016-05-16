import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import memberAPI from '../api/memberAPI';
import MemberEntity from '../api/MemberEntity';
import fetchMembersCompleted from '../actions/fetchMembersCompleted';

// worker Saga: will be fired on LOAD_MEMBERS_REQUESTED actions
export function* fetchMembers(action) {
  let members : Array<MemberEntity>;

  members = yield call(memberAPI.getAllMembersAsync)
  yield put(fetchMembersCompleted(members))
}
