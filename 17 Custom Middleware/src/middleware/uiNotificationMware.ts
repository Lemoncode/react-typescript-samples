import * as toastr from 'toastr';
import {UINotificationInfo} from './uiNotificationInfo'

function createUINotificationMiddleware() {
  return ({ dispatch, getState }) => next => action => {
    if (action.uiNotificationInfo) {
      const uiNotificationInfo = action.uiNotificationInfo as UINotificationInfo;
      if(uiNotificationInfo.succeeded) {
          toastr.success(uiNotificationInfo.successMessage);
      } else {
          toastr.error(uiNotificationInfo.errorMessage);
      }
    }

    return next(action);
  };
}

export const notification = createUINotificationMiddleware();
