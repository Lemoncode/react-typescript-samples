import { actionTypes } from './actionTypes';

export const httpCallStartAction = () => ({
  type: actionTypes.HTTP_CALL_START,
});

export const httpCallEndAction = () => ({
  type: actionTypes.HTTP_CALL_END,
});
