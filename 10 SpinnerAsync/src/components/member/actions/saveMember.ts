import { FormValidationResult } from 'lc-form-validation';
import * as toastr from 'toastr';
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
import { memberFormValidation } from '../memberFormValidation';
import { httpCallStartAction } from '../../../middlewares/http/actions';

export const saveMemberAction = (member: MemberEntity) => (dispatch) => {
  memberFormValidation.validateForm(member)
    .then((formValidationResult) => {
      if (formValidationResult.succeeded) {
        dispatch(httpCallStartAction());
        saveMember(member);
      }
      dispatch(saveMemberActionCompleted(formValidationResult));
    });
};

const saveMember = (member: MemberEntity) => {
  memberAPI.saveMember(member)
    .then(() => {
      toastr.success('Member saved.');
      history.back();
    })
    .catch(toastr.error);
};

const saveMemberActionCompleted = (formValidationResult: FormValidationResult) => ({
  type: actionTypes.SAVE_MEMBER,
  payload: formValidationResult,
  meta: {
    httpEnd: true,
  },
});
