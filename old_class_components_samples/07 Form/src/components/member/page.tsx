import * as React from 'react';
import { MemberEntity } from '../../model';
import { MemberForm } from './memberForm';

interface Props {
  member: MemberEntity;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const MemberPage: React.StatelessComponent<Props> = (props) => {
  return (
    <MemberForm
      member={props.member}
      onChange={props.onChange}
      onSave={props.onSave}
    />
  );
}
