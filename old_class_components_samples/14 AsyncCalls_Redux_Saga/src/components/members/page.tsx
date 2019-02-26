import * as React from 'react';
import { Link } from 'react-router-dom';
import { MemberEntity, RepositoryEntity } from '../../model';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';

import {RepoHeader} from '../repos/repoHeader';
import {RepoRow} from '../repos/repoRow';



interface Props {
  members: MemberEntity[];
  repos: RepositoryEntity[];
  fetchMembers(): void;
  fetchRepos(): void;
}

export class MembersPage extends React.Component<Props,{}> {
  constructor(props) {
    super(props);
    this.state = { 
      members: [], 
      repos:[] 
    };
  }
  public componentDidMount() {
    this.props.fetchMembers();
    this.props.fetchRepos();
  }

  public render() {
    return (
      <div className="row">
        <div className="col-5">
          <div className="row">
          <h2> Members Page</h2>
          <Link to="/member">New Member</Link>
          <button onClick={this.props.fetchMembers}>reload</button>
          </div>
          <table className="table" id="members_table">
            <thead>
              <MemberHeader />
            </thead>
            <tbody>
              {
                this.props.members.map((member) =>
                  <MemberRow
                    key={member.id}
                    member={member}
                  />
                )
              }
            </tbody>
          </table>
        </div>

      <div className="col-5">
        <h2> Repo Page</h2>
          <table className="table" id="repos_table">
          <thead>
            <RepoHeader />
          </thead>
          <tbody>
            {
              this.props.repos.map((repo) =>
                <RepoRow
                  key={repo.id}
                  repo={repo}
                />
              )
            }
          </tbody>
        </table>
      </div>
    </div>
    );
  }
};
