import * as React from 'react';
import RepoEntity from '../../api/repoEntity';
import RepoRow from './repoRow';

interface Props extends React.Props<RepoList>{
    repos: Array<RepoEntity>;
}

export default class RepoList extends React.Component<Props, {}>{
    constructor(props: Props) {
        super(props);
    }

    render(){
        return (
            <div>
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
