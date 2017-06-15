import * as React from 'react';
import { hashHistory } from 'react-router';
import * as toastr from 'toastr';
import { memberAPI } from '../../api/member';
import { MemberEntity } from '../../model';
import { MemberPage } from './page';

interface State {
  member: MemberEntity;
}

export class MemberPageContainer extends React.Component<{}, State> {
  constructor() {
    super();

    this.state = {
      member: {
        id: -1,
        login: '',
        avatar_url: '',
      }
    };

    this.onFieldValueChange = this.onFieldValueChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  private onFieldValueChange(fieldName: string, value: string) {
    const nextState = {
      ...this.state,
      member: {
        ...this.state.member,
        [fieldName]: value,
      }
    };

    this.setState(nextState);
  }

  private onSave() {
    memberAPI.saveMember(this.state.member)
      .then(() => {
        toastr.success('Member saved.');
        hashHistory.goBack();
      });
  }

  render() {
    return (
      <MemberPage
        member={this.state.member}
        onChange={this.onFieldValueChange}
        onSave={this.onSave}
      />
    );
  }
}
