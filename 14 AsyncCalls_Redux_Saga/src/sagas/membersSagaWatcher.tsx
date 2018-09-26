
import { fork, takeLatest, all, call } from 'redux-saga/effects';
import { fetchMembers } from './membersSaga';

// add here all your watchers
// https://github.com/yelouafi/redux-saga/blob/master/examples/real-world/sagas/index.js
function* watchLoadMembersRequest() {
        console.log("Estoy en members Saga llamando");
        yield call(fetchMembers);
}
// Register all your watchers
export default function* root() {
    console.log("Estoy en members Saga Watcher");
    yield all([
        
        fork(watchLoadMembersRequest),
    ])
}