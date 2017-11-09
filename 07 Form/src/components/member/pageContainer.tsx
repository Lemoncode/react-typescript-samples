import * as React from 'react';
import * as toastr from 'toastr';
import { memberAPI } from '../../api/member';
import { MemberEntity } from '../../model';
import { MemberPage } from './page';
import PropTypes from 'prop-types';

interface State {
  member: MemberEntity;
}

interface Props {
  history: PropTypes.object.isRequired;
}

export class MemberPageContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
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

  private onSave = (props : Props) => () => {
    memberAPI.saveMember(this.state.member)
      .then(() => {
        toastr.success('Member saved.');
        props.history.goBack();
      });
  }

  render() {
    return (
      <MemberPage
        member={this.state.member}
        onChange={this.onFieldValueChange}
        onSave={this.onSave(this.props)}
      />
    );
  }
}