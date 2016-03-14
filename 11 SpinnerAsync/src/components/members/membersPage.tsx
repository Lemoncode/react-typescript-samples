import * as React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router';
import MemberEntity from '../../api/memberEntity';
import MemberAPI from '../../api/memberAPI';
import MemberRow from './memberRow';
import loadMembers from '../../actions/loadMembers';
import RepoEntity from '../../api/repoEntity';
import RepoRow from './repoRow';
import loadRepos from '../../actions/loadRepos';

// Presentational

// extends React.Props<MembersPage>
interface Props extends React.Props<MembersPage>{
  members? : Array<MemberEntity>;
  loadMembers? : () => void;
  repos? : Array<RepoEntity>;
  loadRepos? : () => void;
}

class MembersPage extends React.Component<Props, {}> {

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
              this.props.members.map((member : MemberEntity) =>
                  <MemberRow key={member.id} member = {member}/>
                )
              }
            </tbody>
          </table>

          <h2>Repos</h2>
          <table className="table">
            <thead>
              <tr>
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
              this.props.repos.map((repo: RepoEntity) =>
                <RepoRow key={repo.id} repo={repo}/>
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
      members: state.members,
      repos: state.repos
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: () => {return dispatch(loadMembers())},
    loadRepos: () => { return dispatch(loadRepos()) }
  }
}

const ContainerMembersPage = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(MembersPage)


export default ContainerMembersPage;
