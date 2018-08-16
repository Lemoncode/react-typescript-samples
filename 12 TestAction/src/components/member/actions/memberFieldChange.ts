import { FieldValidationResult } from 'lc-form-validation';
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberFormValidation } from '../memberFormValidation';
import { trackPromise } from 'react-promise-tracker';

export interface MemberFieldChangePayload {
  fieldValidationResult: FieldValidationResult;
  value: any;
}

export const memberFieldChangeAction = (member: MemberEntity, fieldName: string, value: any) => (dispatch) => {
  return trackPromise(
    memberFormValidation.validateField(member, fieldName, value)
    .then((fieldValidationResult) => {
      dispatch(memberFieldChangeCompleted(fieldValidationResult, value));
    })
    );
};


 const memberFieldChangeCompleted = (fieldValidationResult: FieldValidationResult, value: any) => {
   return ({
    type: actionTypes.UPDATE_MEMBER_FIELD,
    payload: {
      fieldValidationResult,
      value,
      }   as MemberFieldChangePayload,
    })
  };
