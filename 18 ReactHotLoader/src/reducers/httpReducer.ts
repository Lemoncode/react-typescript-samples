import objectAssign = require('object-assign');
import http from '../http/http';

// Later on add more flags, like error or something like that?
class HttpState {
    httpCallsInProgress : boolean;
    numberOfCalls : number;

    constructor(){
        this.httpCallsInProgress = false;
        this.numberOfCalls = 0;
    }
}
// Just to show how combine reducers work, we have
// divided into two reducers member load + member load/update/delete
let httpReducer = (state = new HttpState(), action) => {
  let newState : HttpState = null;
  let numberOfCalls : number = null;
  let callsInProgress : boolean = null;

  switch (action.type) {
    case 'HTTP_GET_CALL_STARTED':
      numberOfCalls = state.numberOfCalls + 1;
      callsInProgress = true;

      newState = objectAssign({}, state, {httpCallsInProgress: callsInProgress, numberOfCalls: numberOfCalls});
      return newState;

    case 'HTTP_GET_CALL_COMPLETED':
      numberOfCalls = state.numberOfCalls > 0 ?
        state.numberOfCalls - 1 :
        0;

      callsInProgress = (numberOfCalls > 0);

      newState = objectAssign({}, state, {httpCallsInProgress: callsInProgress, numberOfCalls: numberOfCalls});
      return newState;

    default:
      return state;
  }
};

export {
    HttpState,
    httpReducer
}
