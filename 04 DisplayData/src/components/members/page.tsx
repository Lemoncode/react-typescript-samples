import * as React from 'react';
import { MemberEntity } from '../../model';
import { memberAPI } from '../../api/member';

interface State {
  members: MemberEntity[];
}

export class MembersPage extends React.Component<Props, State> {

  constructor() {
    super();
    this.state = { members: [] };
  }

  public componentWillMount() {
    this.state.members = memberAPI.fetchMembers();
  }

  public render() {
    var CreateMemberRow = function (member: MemberEntity) {
      return (
        <tr key={member.id}>
          <td>
            <img src={member.avatar_url} className="avatar" />
          </td>
          <td>
            <span>{member.id}</span>
          </td>
          <td>
            <span>{member.login}</span>
          </td>
        </tr>
      )
    }

    return (
      <div className="row">
        <h2> Members Page</h2>
        <table className="table">
          <thead>
            <tr>
              <th>
                Avatar
                </th>
              <th>
                Id
                </th>
              <th>
                Name
                </th>
            </tr>
          </thead>
          <tbody>
            {this.state.members.map(CreateMemberRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
}
