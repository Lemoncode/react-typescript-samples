import * as React from 'react';
import { MemberEntity } from '../../model';
import { memberAPI } from '../../api/member';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';

interface State {
  members: MemberEntity[];
}

export class MembersPage extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = { members: [] };
  }

  public componentDidMount() {
    memberAPI.fetchMembers()
      .then((members) => {
        this.setState({ members });
      });
  }

  public render() {
    return (
      <div className="row">
        <h2> Members Page</h2>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
            {
              this.state.members.map((member) =>
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
