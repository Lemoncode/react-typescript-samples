import * as React from 'react';
import MemberEntity from '../../api/memberEntity';
import MemberList from './memberList';
import RepoEntity from '../../api/repoEntity';
import RepoList from '../repos/repoList';

interface Props extends React.Props<MembersPage>{
  members? : Array<MemberEntity>;
  loadMembers? : () => void;
  repos? : Array<RepoEntity>;
  loadRepos? : () => void;
}

export default class MembersPage extends React.Component<Props, {}> {

   // Standard react lifecycle function:
   // https://facebook.github.io/react/docs/component-specs.html
   public componentDidMount() {
     this.props.loadMembers();
     this.props.loadRepos();
   }

   public render() {
     if(!this.props.members || !this.props.repos)
        return (<div>No data</div>)

       return (
        <div className="row">
          <MemberList members={this.props.members}/>
          <RepoList repos={this.props.repos}/>
        </div>
       );
  }
}
