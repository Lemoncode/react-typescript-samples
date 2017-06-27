import { httpCallEndAction } from './actions';

export const httpMiddleware = ({ dispatch }) => (next) => (action) => {
  return dispatchHttpCallEndAction(dispatch, next, action);
};

const dispatchHttpCallEndAction = (dispatch, next, action) => {
  const httpEnd = action.meta && action.meta.httpEnd;

  if (!httpEnd) {
    return next(action);
  }
  else {
    const nextAction = cleanAction(action);
    next(nextAction);
    return dispatch(httpCallEndAction());
  }
};

const cleanAction = (action) => ({
  ...action,
  meta: {
    ...action.meta,
    httpEnd: null,
  },
});
