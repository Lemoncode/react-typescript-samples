import * as toastr from 'toastr';
import {NavigationInfo} from './navigationInfo'
import { hashHistory } from 'react-router';

function createUINotificationMiddleware() {
  return ({ dispatch, getState }) => next => action => {
    if (action.navigationInfo) {
      const navigationInfo = action.navigationInfo as NavigationInfo;
      if(navigationInfo.succeeded) {
          hashHistory.push('/members');
      } else {
      }
    }

    return next(action);
  };
}

export const navigationMiddleware = createUINotificationMiddleware();
