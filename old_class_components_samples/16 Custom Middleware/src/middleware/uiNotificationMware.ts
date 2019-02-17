import * as toastr from 'toastr';
import {UINotificationInfo} from './uiNotificationInfo'

function createUINotificationMiddleware() {
  return ({ dispatch, getState }) => next => action => {
    if (action.uiNotificationInfo) {
      showUINotificationInfo(action.uiNotificationInfo);
    }

    return next(action);
  };
}

function showUINotificationInfo(uiNotificationInfo: UINotificationInfo) {
  if (uiNotificationInfo.succeeded) {
    toastr.success(uiNotificationInfo.successMessage);
  } else {
    toastr.error(uiNotificationInfo.errorMessage);
  }
}

export const uiNotificationMiddleware = createUINotificationMiddleware();
