import * as React from 'react';
import { MemberEntity, MemberErrors } from '../../model';
import { MemberForm } from './memberForm';

interface Props {
  memberId: number;
  member: MemberEntity;
  memberErrors: MemberErrors;
  fetchMemberById: (id: number) => void;
  onChange: (member: MemberEntity, fieldName: string, value: string) => void;
  onSave: (member: MemberEntity) => void;
}

export class MemberPage extends React.Component<Props, {}> {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    this.props.fetchMemberById(this.props.memberId);
  }

  private onChange(fieldName: string, value: string) {
    this.props.onChange(this.props.member, fieldName, value);
  }

  private onSave() {
    this.props.onSave(this.props.member);
  }

  render() {
    return (
      <MemberForm
        member={this.props.member}
        memberErrors={this.props.memberErrors}
        onChange={this.onChange}
        onSave={this.onSave}
      />
    );
  }
}
