import * as React from 'react';
import { Link } from 'react-router';
import { MemberEntity } from '../../model';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';

interface Props {
  members: MemberEntity[];
  fetchMembers(): void;
}

export class MembersPage extends React.Component<Props,{}> {
  public componentDidMount() {
    this.props.fetchMembers();
  }

  public render() {
    return (
      <div className="row">
        <h2> Members Page</h2>
        <Link to="/member">New Member</Link>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
            {
              this.props.members.map((member) =>
                <MemberRow
                  key={member.id}
                  member={member}
                />
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
};
