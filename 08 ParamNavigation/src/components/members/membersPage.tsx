import * as React from 'react';
import {Link} from 'react-router';
import memberEntity from '../../api/memberEntity';
import MemberAPI from '../../api/memberAPI';
import MemberRow from './memberRow'

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

       return (
        <div className="row">
          <h2> Members Page</h2>
          <Link to="/member">New Member</Link>
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
            <tbody> {
              this.state.members.map((member : memberEntity) =>
                  <MemberRow key={member.id} member = {member}/>
                )
              }
            </tbody>
          </table>
        </div>
       );
  }
}
