//import {takeLatest} from 'redux-saga';
import { fork, all, takeLatest, takeEvery } from 'redux-saga/effects';
import { fetchMembers } from './membersSaga';
import {actionTypes} from '../common/constants/actionTypes';

// add here all your watchers
// https://github.com/yelouafi/redux-saga/blob/master/examples/real-world/sagas/index.js
function* watchLoadMembersRequest() {
        console.log("Estoy en members Saga llamando");
       
        yield takeEvery(actionTypes.FETCH_MEMBER_REQUEST, fetchMembers);
         /* while (true){
           let task = yield takeLatest (actionTypes.FETCH_MEMBER_REQUEST, fetchMembers);
           console.log(task);
        } */
}
// Register all your watchers
export default function* root() {
    console.log("Estoy en members Saga Watcher");
    yield all([
        fork(watchLoadMembersRequest),
    ])
}