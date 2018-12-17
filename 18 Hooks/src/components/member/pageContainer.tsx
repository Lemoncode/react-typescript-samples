import * as React from 'react';
import * as toastr from 'toastr';
import { FieldValidationResult } from 'lc-form-validation';
import { memberAPI } from '../../api/member';
import { MemberEntity, MemberErrors } from '../../model';
import { memberFormValidation } from './memberFormValidation';
import { MemberPage } from './page';

interface Props {
  params: { id: string };
}

interface State {
  member: MemberEntity;
  memberErrors: MemberErrors;
}

export class MemberPageContainer extends React.Component<any, State> {
  constructor(props) {
    super(props);

    this.state = {
      member: {
        id: -1,
        login: '',
        avatar_url: '',
      },
      memberErrors: {
        login: new FieldValidationResult(),
      }
    };

    this.onFieldValueChange = this.onFieldValueChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  public componentDidMount() {
    const memberId = Number(this.props.match.params.id) || 0;
    memberAPI.fetchMemberById(memberId)
      .then((member) => {
        this.setState({
          ...this.state,
          member,
        });
      });
  }

  private onFieldValueChange(fieldName: string, value: string) {
    memberFormValidation.validateField(this.state.member, fieldName, value)
      .then((fieldValidationResult) => {
        const nextState = {
          ...this.state,
          member: {
            ...this.state.member,
            [fieldName]: value,
          },
          memberErrors: {
            ...this.state.memberErrors,
            [fieldName]: fieldValidationResult,
          }
        };

        this.setState(nextState);
      });
  }

  private onSave() {
    memberFormValidation.validateForm(this.state.member)
      .then((formValidationResult) => {
        if (formValidationResult.succeeded) {
          memberAPI.saveMember(this.state.member)
            .then(() => {
              toastr.success('Member saved.');
              this.props.history.goBack();
            });
        }
      });
  }

  render() {
    return (
      <MemberPage
        member={this.state.member}
        memberErrors={this.state.memberErrors}
        onChange={this.onFieldValueChange}
        onSave={this.onSave}
      />
    );
  }
}
