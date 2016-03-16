import * as React from 'react';
import memberEntity from '../../api/memberEntity';
import MemberAPI from '../../api/memberAPI';

interface Props extends React.Props<MembersPage> {
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  members : Array<memberEntity>
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class MembersPage extends React.Component<Props, State> {

  constructor(props : Props){
        super(props);
        // set initial state
        this.state = {members: []};
  }


   // Standard react lifecycle function:
   // https://facebook.github.io/react/docs/component-specs.html
   public componentWillMount() {
     this.state.members = MemberAPI.getAllMembers();
   }



   public render() {
      var CreateMemberRow = function(member : memberEntity) {
        return (
            <tr key={member.id}>
              <td>
                <img src={member.avatar_url} className="avatar"/>
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
              <th>
                Avatar
              </th>
              <th>
                Id
              </th>
              <th>
                Name
              </th>
            </thead>
            <tbody>
              {this.state.members.map(CreateMemberRow, this)}
            </tbody>
          </table>
        </div>
       );
  }
}
