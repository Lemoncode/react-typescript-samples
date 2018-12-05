import {actionTypes} from '../common/constants/actionTypes';
import {RepositoryEntity} from '../model/repositoryEntity';

export const repositoriesReducer = (state: RepositoryEntity[] = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_REPOSITORIES_COMPLETED:
            return handleFetchRepositoriesCompleted(state, action.payload);
    }

    return state;
};

const handleFetchRepositoriesCompleted = (state: RepositoryEntity[], payload: RepositoryEntity[]) => {
    return payload;
};