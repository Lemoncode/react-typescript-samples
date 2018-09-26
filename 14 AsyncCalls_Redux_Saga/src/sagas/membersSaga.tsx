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
    console.log("AQUI!!!!");
    let members: Array<MemberEntity>;
    // In case you need error handling: https://github.com/yelouafi/redux-saga/blob/master/docs/basics/ErrorHandling.md
    console.log("Estoy en members Saga");
    yield put(httpCallStarted());
    members = yield call(memberAPI.fetchMembersAsync);
    yield put(fetchMembersActionSaga(members));
    yield put(httpCallCompleted());
}