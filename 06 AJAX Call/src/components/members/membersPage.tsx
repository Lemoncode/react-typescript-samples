import * as React from 'react';
import MemberEntity from '../../api/memberEntity';
import MemberAPI from '../../api/memberAPI';
import MemberRow from './memberRow'

interface Props extends React.Props<MembersPage> {
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  members : Array<MemberEntity>
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class MembersPage extends React.Component<Props, State> {

  constructor(props : Props){
        super(props);
        // set initial state
        this.state = {members: []};
  }


   // Changing to componentDidMount to handle initial ajax request response
   public componentDidMount() {
     var memberAPI : MemberAPI = new MemberAPI();
     //this.state.members = memberAPI.getAllMembers();
     var promise  : Q.Promise<MemberEntity[]> = memberAPI.getAllMembersAsync();

     promise.done(function (members) {
        // React only triggers a re-render if you use setState to update the state.
        // http://stackoverflow.com/questions/25937369/react-component-not-re-rendering-on-state-change
        this.setState({members: members})
     }.bind(this))
   }

   public render() {

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
            <tbody> {
              this.state.members.map((member : MemberEntity) =>
                  <MemberRow key={member.id} member = {member}/>
                )
              }
            </tbody>
          </table>
        </div>
       );
  }
}
