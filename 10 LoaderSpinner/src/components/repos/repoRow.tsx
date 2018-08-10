import * as React from 'react';
import { RepositoryEntity } from '../../model';


interface Props {
    repo: RepositoryEntity;
}

export const RepoRow: React.StatelessComponent<Props> = ({ repo }) => {
    return (
        <tr>
            <td>
                <span>{repo.id}</span>
            </td>
            <td>
                <span>{repo.name}</span>
            </td>
            <td>
                <span>{repo.description}</span>
            </td>
        </tr>
    );
};
