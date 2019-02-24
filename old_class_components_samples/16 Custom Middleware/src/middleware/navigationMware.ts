import * as toastr from 'toastr';
import { NavigationInfo } from './navigationInfo'
import { hashHistory } from 'react-router';

function createNavigationMiddleware() {
  return ({ dispatch, getState }) => next => action => {
    if (action.navigationInfo) {
      navigateToRoute(action.navigationInfo);
    }
    return next(action);
  };
}

function navigateToRoute(navigationInfo: NavigationInfo){
  if(navigationInfo.succeeded && navigationInfo.successNavigationRoute) {
      hashHistory.push(navigationInfo.successNavigationRoute);
  } else if(navigationInfo.errorNavigationRoute) {
      hashHistory.push(navigationInfo.errorNavigationRoute);
  }
}

export const navigationMiddleware = createNavigationMiddleware();
