import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MemberEntity from '../../api/memberEntity';
import MemberRow from './memberRow';
import fetchMemberRequest from '../../actions/fetchMembersRequest';

// Presentational

// extends React.Props<MembersPage>
interface Props extends React.Props<MembersPage> {
  members?: Array<any>;
  loadMembers?: () => void;
}

class MembersPage extends React.Component<Props, {}> {

  // Standard react lifecycle function:
  // https://facebook.github.io/react/docs/component-specs.html
  public componentDidMount() {
    this.props.loadMembers();
  }

  public render() {
    if (!this.props.members)
      return (<div>No data</div>)


    return (
      <div className="row col-12">
        <div className="container-fluid column">
          <h2> Members Page</h2>
          <Link to="/member">New Member</Link>
        </div>
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
              this.props.members.map((member: MemberEntity) =>
                <MemberRow key={member.id} member={member} />
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
    loadMembers: () => { return dispatch(fetchMemberRequest()) }
  }
}

const ContainerMembersPage = connect<Props>(
  mapStateToProps,
  mapDispatchToProps
)(MembersPage)


export default ContainerMembersPage;
