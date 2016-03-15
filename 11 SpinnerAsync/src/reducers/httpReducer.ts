import objectAssign = require('object-assign');
import http from '../http/http';

// Later on add more flags, like error or something like that?
class httpState {
    httpCallsInProgress : boolean;
    numberOfCalls : number;
}
// Just to show how combine reducers work, we have
// divided into two reducers member load + member load/update/delete
export default (state : httpState = {httpCallsInProgress : false, numberOfCalls: 0}, action) => {
  let newState : httpState = null;
  let numberOfCalls : number = null;
  let callsInProgress : boolean = null;

  switch (action.type) {
    case 'HTTP_INITIALIZE_DISPATCHER':
      http.Initialize(action.dispatcher);
      newState = objectAssign({}, state, {});
      return newState;
    case 'HTTP_GET_CALL_STARTED':
      numberOfCalls = state.numberOfCalls + 1;
      callsInProgress = true;

      newState = objectAssign({}, state, {httpCallsInProgress: callsInProgress, numberOfCalls: numberOfCalls});
      return newState;


    case 'HTTP_GET_CALL_COMPLETED':
      numberOfCalls = state.numberOfCalls - 1;
      callsInProgress = (numberOfCalls > 0);

      newState = objectAssign({}, state, {httpCallsInProgress: callsInProgress, numberOfCalls: numberOfCalls});
      return newState;

    default:
      return state;
  }

};
