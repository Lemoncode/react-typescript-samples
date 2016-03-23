import * as React from 'react';
import RepoEntity from '../../api/repoEntity';

interface Props extends React.Props<RepoRow>{
  repo : RepoEntity;
}

export default class RepoRow extends React.Component<Props, {}> {
  constructor(props: Props){
    super(props);
  }

  public render() {
    return (
      <tr>
        <td>
          <span>{this.props.repo.id}</span>
        </td>
        <td>
          <span>{this.props.repo.name}</span>
        </td>
      </tr>
    );
  }
}
