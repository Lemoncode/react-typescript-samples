import * as toastr from 'toastr';
import {NavigationInfo} from './navigationInfo'
import { hashHistory } from 'react-router';

function createNavigationMiddleware() {
  return ({ dispatch, getState }) => next => action => {
    if (action.navigationInfo) {
      const navigationInfo = action.navigationInfo as NavigationInfo;
      if(navigationInfo.succeeded) {
          hashHistory.push(navigationInfo.successNavigationRoute);
      } else {
        if(navigationInfo.errorNavigationRoute) {
          hashHistory.push(navigationInfo.errorNavigationRoute);
        }
      }
    }

    return next(action);
  };
}

export const navigationMiddleware = createNavigationMiddleware();
