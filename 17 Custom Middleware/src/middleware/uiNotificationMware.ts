import * as toastr from 'toastr';
import {UINotificationInfo} from './uiNotificationInfo'

function createUINotificationMiddleware(succeededArg : boolean = null) {
  return ({ dispatch, getState }) => next => action => {
    if (action.uiNotificationInfo) {
      const uiNotificationInfo = action.uiNotificationInfo as UINotificationInfo;
      if(succeededArg) {
          toastr.success(uiNotificationInfo.successMessage);
      } else {
          toastr.error(uiNotificationInfo.errorMessage);
      }

      return action(dispatch, getState);
    }

    return next(action);
  };
}

export const notification = createUINotificationMiddleware();
notification["withExtraArgument"] = createUINotificationMiddleware;
