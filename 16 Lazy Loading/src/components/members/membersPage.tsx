import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import MemberEntity from '../../api/memberEntity';
import MemberRow from './memberRow';
import loadMembers from '../../actions/loadMembers';

interface Props {
  members? : MemberEntity[];
  loadMembers? : () => void;
}

class MembersPage extends React.Component<Props, {}> {
   public componentDidMount() {
     this.props.loadMembers();
   }

  public render() {
    if(!this.props.members) {
      return (<div>No data</div>);
    }

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
          <tbody>
          {
            this.props.members.map(member =>
              <MemberRow key={ member.id } member={ member }/>)
          }
          </tbody>
        </table>
      </div>);
  }
}

const mapStateToProps = (state: any): Props => {
  return {
    members: state.members,
  };
}

const mapDispatchToProps = (dispatch: Dispatch): Props => {
  return {
    loadMembers: () => {return dispatch(loadMembers())}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersPage);
