import * as React from 'react';
import { Link } from 'react-router-dom';
import { MemberEntity } from '../../model';
import { memberAPI } from '../../api/member';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';

interface State {
  members: MemberEntity[];
}

export class MembersPage extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = { members: [] };
  }

  public componentDidMount() {
    memberAPI.fetchMembersAsync()
      .then((members) => {
        this.setState({ members });
      });
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
