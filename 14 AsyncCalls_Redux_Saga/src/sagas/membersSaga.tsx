import "regenerator-runtime/runtime";
import { call, put } from 'redux-saga/effects';
import {memberAPI} from '../api/member';
import {fetchMembersActionSaga} from '../components/members/actions';
import httpCallStarted from '../common/actions/httpCallStarted';
import httpCallCompleted from '../common/actions/httpCallCompleated';
import {MemberEntity} from '../model/memberEntity';
import {trackPromise} from 'react-promise-tracker';

// worker Saga: will be fired on LOAD_MEMBERS_REQUESTED actions
export function* fetchMembers() {
    let members: Array<MemberEntity>;
    members = yield call(memberAPI.fetchMembersAsync);
    yield put(fetchMembersActionSaga(members));
}