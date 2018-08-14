import { FieldValidationResult } from 'lc-form-validation';
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberFormValidation } from '../memberFormValidation';
import { trackPromise } from 'react-promise-tracker';

export const memberFieldChangeAction = (member: MemberEntity, fieldName: string, value: any) => (dispatch) => {
  trackPromise(
    memberFormValidation.validateField(member, fieldName, value)
    .then((fieldValidationResult) => {
      dispatch(memberFieldChangeCompleted(fieldValidationResult, value));
    })
    );
};

export interface MemberFieldChangePayload {
  fieldValidationResult: FieldValidationResult;
  value: any;
}

const memberFieldChangeCompleted = (fieldValidationResult: FieldValidationResult, value: any) => ({
  type: actionTypes.UPDATE_MEMBER_FIELD,
  payload: {
    fieldValidationResult,
    value,
  } as MemberFieldChangePayload,
});
