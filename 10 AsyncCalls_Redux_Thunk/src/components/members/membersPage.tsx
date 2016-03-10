import * as React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router';
import memberEntity from '../../api/memberEntity';
import MemberAPI from '../../api/memberAPI';
import MemberRow from './memberRow'
import loadMembers from '../../actions/loadMembers'

// Presentational

// extends React.Props<MembersPage>
interface Props extends React.Props<MembersPage>{
  members? : Array<any>;
  loadMembers? : () => void;
}

// StateLessComponent complaining
// TODO: Check if it's a problem of type definition
class MembersPage extends React.Component<Props, {}> {
   context: any;

   static contextTypes = {
        store: React.PropTypes.object
   }
   private unsubscribe: Function;


   // Standard react lifecycle function:
   // https://facebook.github.io/react/docs/component-specs.html
   public componentDidMount() {
     this.props.loadMembers();
   }

   public render() {
     if(!this.props.members)
        return (<div>No data</div>)


       return (
        <div className="row">
          <h2> Members Page</h2>
          <Link to="/member">New Member</Link>
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
              this.props.members.map((member : memberEntity) =>
                  <MemberRow key={member.id} member = {member}/>
                )
              }
            </tbody>
          </table>
        </div>
       );
  }
}

// Container

const mapStateToProps = (state) => {
    return {
      members: state.members
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: () => {return dispatch(loadMembers())}
  }
}

// TODO: Hack to bypass the issue when declaring StateLessComponent
// Pending research here
var nonTypedMembersPage : any = MembersPage;

const ContainerMembersPage = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(nonTypedMembersPage)


export default ContainerMembersPage;
