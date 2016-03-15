import * as React from 'react';
import { connect } from 'react-redux'
import MemberEntity from '../../api/memberEntity';
import MemberList from './memberList';
import loadMembers from '../../actions/loadMembers';
import RepoEntity from '../../api/repoEntity';
import RepoList from '../repos/repoList';
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
     this.props.loadRepos();
   }

   public render() {
     if(!this.props.members)
        return (<div>No data</div>)


       return (
        <div className="row">          
          <MemberList members={this.props.members}/>
          <RepoList repos={this.props.repos}/>
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
