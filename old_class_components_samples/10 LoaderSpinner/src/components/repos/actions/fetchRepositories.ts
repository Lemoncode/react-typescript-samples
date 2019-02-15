import { actionTypes } from '../../../common/constants/actionTypes';
import { RepositoryEntity } from '../../../model';
import { memberAPI } from '../../../api/member';
import { trackPromise } from 'react-promise-tracker';

export const fetchRepositoriesAction = () => (dispatch) => {
    trackPromise(
        memberAPI.fetchRepositoriesAsync()
            .then((repos) => {
                dispatch(fetchReposCompleted(repos));
            })
    );
};

const fetchReposCompleted = (repos: RepositoryEntity[]) => ({
    type: actionTypes.FETCH_REPOSITORIES_COMPLETED,
    payload: repos,
});
